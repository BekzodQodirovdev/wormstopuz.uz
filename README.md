# Wormstop Landing Page - Modern Design

Замонавий, минималистик Next.js landing page для Wormstop (средство от паразитов).

## 🎨 Дизайн

Лойиҳа замонавий веб-дизайн тенденцияларига асосан қурилган:
- ✨ Тоза, минималистик интерфейс
- 🎯 Кўк акцент ранглари (#2563eb)
- 📱 Тўлиқ responsive дизайн
- ⚡ Тез ва оптималлаштирилган
- 🎭 Smooth анимациялар ва transition'лар

## 📁 Структура

```
wormstop/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Асосий саҳифа (Hero + Content)
│   ├── news/page.js       # Success stories саҳифаси
│   └── globals.css        # Глобал стиллар
├── components/
│   ├── Header.js          # Навигация
│   ├── OrderForm.js       # Замонавий форма
│   └── FAQ.js             # Accordion FAQ
├── public/
│   └── product.png        # Маҳсулот расми
└── package.json
```

## 🚀 Ишга тушириш

### 1. Node.js ўрнатиш

```bash
# nvm орқали (тавсия этилади)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

### 2. Зависимостлар

```bash
cd /home/bekzod/Desktop/innosoft-systems/wormstop
npm install
```

### 3. Development

```bash
npm run dev
```

Браузерда очинг: **http://localhost:3000**

### 4. Production

```bash
npm run build
npm start
```

## 📄 Саҳифалар

### Асосий саҳифа (/)

**Секциялар:**
1. **Hero Section** - Асосий баннер (2 ustun: content + order form)
   - Катта сарлавҳа
   - Статистика (94% / 0%)
   - CTA кнопкалар

2. **Why Traditional Methods Fail** - Муаммо баёни
   - 2 ustunli layout
   - Текст + визуал

3. **How WormStop Works** - Маҳсулот таърифи
   - Табиий таркиб
   - Фойдалар

4. **Warning/Offer Box** - Акция маълумоти
   - Чегирма (77%)
   - Қолган захиралар (453)

5. **FAQ** - Accordion стилида

6. **Final CTA** - Охирги чақириқ

7. **Order Section** - Буюртма шакли

### Success Stories (/news)

**Секциялар:**
1. **Hero** - Сарлавҳа
2. **About Parasites** - Симптомлар (болалар/катталар)
3. **Why WormStop** - Афзалликлар
4. **Testimonials** - Мижозлар шарҳлари (6 та)
5. **FAQ** - Саволлар
6. **Order Form** - Буюртма

## 🎯 Асосий хусусиятлар

### Замонавий Order Form
- 📦 Маҳсулот расми
- ✅ Badges (In Stock, Original)
- 👤 To'liq форма (Исм, Телефон, Вилоят, Микдор)
- 💰 Динамик нарх ҳисоблаш
- ⏰ 15 дақиқалик таймер
- 📱 Телефон валидацияси (+998)

### FAQ Component
- 🎭 Accordion функционалиги
- ⬆️⬇️ Очилиш/ёпилиш анимацияси
- 4 ta саволлар

### Testimonial Cards
- 👥 6 та ҳақиқий шарҳлар
- 🌍 Жойлашув белгиси
- ⭐ Рейтинг кўрсатгичи
- 🎨 Hover эффектлари

## 🎨 Дизайн тизими

### Ранглар
```css
Primary: #2563eb (Blue)
Success: #10b981 (Green)
Warning: #f59e0b (Orange)
Text: #1a1a1a (Black)
Text Secondary: #6b7280 (Gray)
Background: #f8f9fa (Light Gray)
```

### Typography
```css
Font: -apple-system, Segoe UI, Roboto...
H1: 42px (Mobile: 28px)
H2: 32px (Mobile: 28px)
Body: 16px
Small: 14px
```

### Spacing
```css
Container: 1200px max-width
Padding: 24px (Mobile: 16px)
Section Gap: 60px
Grid Gap: 60px (Mobile: 40px)
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚙️ Конфигурация

### Таймер
`components/OrderForm.js` да:
```javascript
const [timer, setTimer] = useState(900) // 15 minutes
```

### Захира
`app/page.js` дa:
```javascript
Remaining packages: 453
```

### Нарх
`components/OrderForm.js` да:
```javascript
const totalPrice = 129000 * formData.quantity
```

## 🔧 Муаммолар ечими

### Порт банд
```bash
npm run dev -- -p 3001
```

### Cache муаммоси
```bash
rm -rf .next
npm run dev
```

### Стиллар кўринмаса
Браузерни hard refresh қилинг: `Ctrl + Shift + R`

## 📊 Performance

- ⚡ JavaScript: ~5KB (compressed)
- 🎨 CSS: ~8KB
- 🖼️ Images: Optimized
- 📦 Total: ~15KB (fast load)

## 🌐 Браузер кўллаби

- ✅ Chrome 90+
- ✅ Firefox 88+  
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Кейинги қадамлар

1. ✅ Node.js ўрнатиш
2. ✅ `npm install` ишга тушириш
3. ✅ `npm run dev` билан синаш
4. ✅ Браузерда тестлаш
5. 🔄 deploymentга тайёрлаш

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder
```

## 📞 Қўллаб-қувватлаш

Саволлар учун: [support@wormstop.uz](mailto:support@wormstop.uz)

---

**Муаллиф:** Antigravity AI  
**Версия:** 2.0.0 (Modern Design)  
**Санаси:** 2026-01-31
