#!/bin/bash

# Sniffr App Setup Script
# This script helps set up the development environment

echo "🐕 Sniffr App Setup Script"
echo "=========================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if running from project root
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Please run this script from the project root directory${NC}"
    exit 1
fi

echo "Setting up environment files..."

# Web app environment
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}Creating .env.local from example...${NC}"
    cp .env.local.example .env.local
    echo -e "${GREEN}✓ Created .env.local${NC}"
    echo -e "${YELLOW}  Please edit .env.local and add your API keys${NC}"
else
    echo -e "${GREEN}✓ .env.local already exists${NC}"
fi

# Mobile app environment
if [ ! -f "mobile/.env" ]; then
    echo -e "${YELLOW}Creating mobile/.env from example...${NC}"
    cp mobile/.env.example mobile/.env
    echo -e "${GREEN}✓ Created mobile/.env${NC}"
    echo -e "${YELLOW}  Please edit mobile/.env and add your Firebase configuration${NC}"
else
    echo -e "${GREEN}✓ mobile/.env already exists${NC}"
fi

echo ""
echo "Installing dependencies..."

# Install web dependencies
echo -e "${YELLOW}Installing web app dependencies...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Web dependencies installed${NC}"
else
    echo -e "${RED}✗ Failed to install web dependencies${NC}"
fi

# Install mobile dependencies
echo -e "${YELLOW}Installing mobile app dependencies...${NC}"
cd mobile
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Mobile dependencies installed${NC}"
else
    echo -e "${RED}✗ Failed to install mobile dependencies${NC}"
fi
cd ..

echo ""
echo "Setup complete!"
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. Edit .env.local with your API keys"
echo "2. Edit mobile/.env with your Firebase configuration"
echo "3. Run 'npm run dev' to start the web app"
echo "4. Run 'cd mobile && npm start' to start the mobile app"
echo ""
echo "For more information, see:"
echo "  - README.md for getting started"
echo "  - DEPLOYMENT.md for deployment instructions"
echo "  - PAYMENT.md for payment integration"
echo "  - ROUTING.md for routing documentation"
echo ""
echo "🐕 Happy coding!"
