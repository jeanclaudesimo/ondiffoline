// Input sanitization utilities to block malicious payloads

const DANGEROUS_PATTERNS = [
  // Code injection
  /returnNaN/i,
  /eval\s*\(/i,
  /Function\s*\(/i,
  /setTimeout\s*\(/i,
  /setInterval\s*\(/i,
  /new\s+Function/i,

  // Path traversal
  /\.\.\//,
  /\.\.%2[fF]/,
  /\/etc\//i,
  /\/dev\//i,
  /\/proc\//i,
  /\/tmp\//i,
  /lrt/i,

  // Shell injection
  /;\s*(?:ls|cat|id|whoami|wget|curl|bash|sh|nc)/i,
  /\|\s*(?:ls|cat|id|whoami|wget|curl|bash|sh|nc)/i,
  /`[^`]+`/,
  /\$\([^)]+\)/,
  /\$\{[^}]+\}/,
  /base64/i,

  // SQL injection
  /union\s+select/i,
  /;\s*drop\s+/i,
  /;\s*delete\s+/i,
  /'\s*or\s+'.*='/i,

  // XSS
  /<script/i,
  /javascript:/i,
  /on\w+\s*=/i,
];

export function containsMaliciousContent(value: unknown): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return DANGEROUS_PATTERNS.some(pattern => pattern.test(value));
  }

  if (typeof value === 'object') {
    return Object.values(value).some(v => containsMaliciousContent(v));
  }

  return false;
}

export function sanitizeString(value: string, maxLength = 1000): string {
  if (typeof value !== 'string') {
    return '';
  }

  // Truncate
  let sanitized = value.slice(0, maxLength);

  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');

  // Basic HTML escape
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  return sanitized;
}

export interface ValidationResult {
  valid: boolean;
  reason?: string;
}

export function validateRequestBody(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') {
    return { valid: false, reason: 'Invalid body' };
  }

  if (containsMaliciousContent(body)) {
    return { valid: false, reason: 'Malicious content detected' };
  }

  // Check for oversized strings
  const checkSize = (obj: unknown, path = ''): string | null => {
    if (typeof obj === 'string' && obj.length > 10000) {
      return `Field ${path} too large`;
    }
    if (obj && typeof obj === 'object') {
      for (const [key, value] of Object.entries(obj)) {
        const result = checkSize(value, `${path}.${key}`);
        if (result) return result;
      }
    }
    return null;
  };

  const sizeError = checkSize(body);
  if (sizeError) {
    return { valid: false, reason: sizeError };
  }

  return { valid: true };
}
