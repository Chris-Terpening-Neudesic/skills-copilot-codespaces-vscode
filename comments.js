// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The comments.html file should be served in response to a GET request to the root URL.
// The comments.html file should contain the following:
// A form with a textarea input and a submit button.
// A div with the id comments.
// When the form is submitted, the text in the textarea should be added to the div with the id comments.
// The text should be added as a new paragraph element.
// The text should be escaped to prevent XSS attacks.
// The text should be truncated to 80 characters.
// The text should be trimmed of leading and trailing whitespace.
// The text should be sanitized to prevent HTML injection.
// The text should be sanitized to prevent script injection.
// The text should be sanitized to prevent SQL injection.
// The text should be sanitized to prevent shell injection.
// The text should be sanitized to prevent command injection.
// The text should be sanitized to prevent path traversal.
// The text should be sanitized to prevent directory traversal.
// The text should be sanitized to prevent remote file inclusion.
// The text should be sanitized to prevent local file inclusion.
// The text should be sanitized to prevent remote code execution.
// The text should be sanitized to prevent local code execution.
// The text should be sanitized to prevent remote command execution.
// The text should be sanitized to prevent local command execution.
// The text should be sanitized to prevent remote code injection.
// The text should be sanitized to prevent local code injection.
// The text should be sanitized to prevent remote shell injection.
// The text should be sanitized to prevent local shell injection.
// The text should be sanitized to prevent remote command injection.
// The text should be sanitized to prevent local command injection.
// The text should be sanitized to prevent remote path traversal.
// The text should be sanitized to prevent local path traversal.
// The text should be sanitized to prevent remote directory traversal.
// The text should be sanitized to prevent local directory traversal.
// The text should be sanitized to prevent remote file inclusion.
// The text should be sanitized to prevent local file inclusion.
// The text should be sanitized to prevent remote code execution.
// The text should be sanitized to prevent local code execution.
// The text should be sanitized to prevent remote command execution.
// The text should be sanitized to prevent local command execution.
// The text should be sanitized to prevent remote code injection.
// The text should be sanitized to prevent local code injection.
// The text should be sanitized to prevent remote shell injection.
// The text should be sanitized to prevent local shell injection.
// The text should be sanitized to prevent remote command injection.
// The text should be sanitized to prevent local command injection.
// The text should be sanitized to prevent remote path traversal.
// The text should be sanitized to prevent local path traversal.
// The text should be sanitized to prevent remote directory traversal.


const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const path = require('path');
const { sanitize } = require('sanitizer');


