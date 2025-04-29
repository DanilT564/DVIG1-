const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Log with colors
const log = {
  info: (message) => console.log(`${colors.cyan}${message}${colors.reset}`),
  success: (message) => console.log(`${colors.green}✓ ${message}${colors.reset}`),
  warn: (message) => console.log(`${colors.yellow}⚠ ${message}${colors.reset}`),
  error: (message) => console.log(`${colors.red}✗ ${message}${colors.reset}`),
  title: (message) => console.log(`\n${colors.bright}${colors.cyan}${message}${colors.reset}\n`)
};

// Execute command and handle errors
function execute(command, errorMessage) {
  try {
    log.info(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    log.error(errorMessage || `Failed to execute: ${command}`);
    if (error.message) log.error(error.message);
    return false;
  }
}

// Build process
async function build() {
  log.title('Starting build process for ООО "СПЕКТР" website');
  
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    log.error('package.json not found. Make sure you are in the project root directory.');
    process.exit(1);
  }
  
  // Install dependencies
  log.info('Installing dependencies...');
  if (!execute('npm install', 'Failed to install dependencies')) {
    process.exit(1);
  }
  log.success('Dependencies installed');
  
  // Build the project
  log.info('Building the project...');
  if (!execute('npm run build', 'Build failed')) {
    process.exit(1);
  }
  log.success('Build completed successfully');
  
  // Check if out directory exists
  if (!fs.existsSync('out')) {
    log.error('Build output directory not found');
    process.exit(1);
  }
  
  log.info('Checking build output...');
  const outputFiles = fs.readdirSync('out');
  log.success(`Generated ${outputFiles.length} files/directories in the output`);
  
  log.title('Build completed successfully! 🎉');
  log.info('The static website has been generated in the "out" directory.');
  log.info('You can now deploy this directory to a static hosting service like Render.');
  log.info('For deployment instructions:');
  log.info('1. Create a new Static Site on Render');
  log.info('2. Connect your repository');
  log.info('3. Set the build command to: node build.js');
  log.info('4. Set the publish directory to: out');
}

// Run the build process
build().catch(error => {
  log.error('An unexpected error occurred during the build process');
  log.error(error.message);
  process.exit(1);
}); 