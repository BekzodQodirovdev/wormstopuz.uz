#!/bin/bash

# Wormstop Quick Start Script
# Bu script loyihani tez ishga tushirish uchun

echo "🚀 Wormstop - Quick Start"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js topilmadi!"
    echo ""
    echo "Node.js o'rnatish uchun quyidagi buyruqlarni bajaring:"
    echo ""
    echo "# NVM orqali (tavsiya etiladi):"
    echo "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "source ~/.bashrc"
    echo "nvm install 20"
    echo "nvm use 20"
    echo ""
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v)
echo "✅ Node.js topildi: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm topilmadi!"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm topildi: v$NPM_VERSION"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Зависимостлар o'rnatilmoqda..."
    echo "⏱️  Bu 1-2 daqiqa davom etishi mumkin..."
    echo ""
    
    npm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Зависимостлар muvaffaqiyatli o'rnatildi!"
    else
        echo ""
        echo "❌ Xatolik yuz berdi!"
        exit 1
    fi
else
    echo "✅ node_modules allaqachon mavjud"
fi

echo ""
echo "========================"
echo "✅ Hammasi tayyor!"
echo "========================"
echo ""
echo "Development serverni ishga tushirish uchun:"
echo ""
echo "  npm run dev"
echo ""
echo "Keyin brauzerda oching:"
echo ""
echo "  http://localhost:3000"
echo ""
echo "📖 To'liq qo'llanma: SETUP_UZ.md"
echo ""
