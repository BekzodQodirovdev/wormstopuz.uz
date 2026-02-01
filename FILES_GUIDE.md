# 🎯 Wormstop Landing Page - Файллар Қўлланмаси

## 📋 Барча файллар рўйхати

### 🔧 Конфигурация файллари

| Файл | Вазифаси | Ўзгартириш |
|------|----------|------------|
| `package.json` | NPM зависимостлари | Керакли кутубхоналар қўшиш |
| `next.config.js` | Next.js созламалари | Deployment конфигурацияси |
| `.gitignore` | Git ignore қоидалари | Игнор файллар қўшиш |

### 📱 App файллари (app/)

| Файл | Вазифаси | Сатрлар |
|------|----------|---------|
| `app/layout.js` | Асосий шаблон | 13 |
| `app/page.js` | Асосий саҳифа (/) | 165 |
| `app/news/page.js` | Янгиликлар (/news) | 195 |
| `app/globals.css` | Барча стиллар | 587 |

### 🧩 Компонентлар (components/)

| Файл | Вазифаси | Сатрлар |
|------|----------|---------|
| `components/Header.js` | Навигация | 12 |
| `components/OrderForm.js` | Буюртма формаси | 155 |
| `components/FAQ.js` | Accordion FAQ | 47 |

### 📄 Документация

| Файл | Тил | Мақсад |
|------|-----|--------|
| `README.md` | English | Асосий қўлланма |
| `SETUP_UZ.md` | O'zbek | Қадамма-қадам қўлланма |
| `FILES_GUIDE.md` | O'zbek | Бу файл |

### 🚀 Скриптлар

| Файл | Вазифаси |
|------|----------|
| `quick-start.sh` | Тез ишга туширйш |

### 🖼️ Статик файллар (public/)

| Файл | Тавсиф |
|------|--------|
| `public/product.png` | Маҳсулот расми (AI яратилган) |

---

## 📝 Ҳар бир файл тафсилоти

### 1. `app/layout.js` - Root Layout

**Вазифаси:** Барча саҳифалар учун умумий шаблон

**Мазмун:**
```javascript
- <html> тег (lang="uz")
- <head> - metadata
- <body> - асосий контент
- globals.css импорти
```

**Қачон ўзгартирилади:**
- Site title ўзгарса
- Meta description ўзгарса
- Тил ўзгарса

---

### 2. `app/page.js` - Асосий саҳифа

**URL:** `/` (http://localhost:3000)

**Бўлимлар:**
1. Hero Section (сарлавҳа + форма)
2. Why Traditional Methods Fail
3. How WormStop Works
4. Warning Box
5. FAQ
6. Final CTA
7. Order Form

**Асосий ўзгаришлар:**

**Сарлавҳани ўзгартириш:**
```javascript
// 12-қатор
<h1>Reclaim Your Health from Parasites</h1>
```

**Статистикани ўзгартириш:**
```javascript
// 21-27-қаторлар
<div className="stat-number">94%</div>
<div className="stat-number">0%</div>
```

**Захирани ўзгартириш:**
```javascript
// 142-қатор
<span style={{...}}>453</span>
```

---

### 3. `app/news/page.js` - Success Stories

**URL:** `/news` (http://localhost:3000/news)

**Мазмун:**
- Testimonials (6 та)
- Симптомлар рўйхати
- FAQ
- Order Form

**Testimonial қўшиш:**

```javascript
// 12-қаторга қўшинг
{
  name: "Yangi Ism",
  location: "Shahar",
  text: "Sharh matni...",
  rating: 5,
  initial: "Y"
}
```

---

### 4. `app/globals.css` - Барча стиллар

**Ҳажм:** 587 сатр

**Асосий қисмлар:**

#### Ранглар (1-10 қаторлар)
```css
Primary: #2563eb (Blue)
Success: #10b981 (Green)
Warning: #f59e0b (Orange)
```

#### Typography (5-11 қаторлар)
```css
Font: -apple-system, Segoe UI...
H1: 42px
H2: 32px
Body: 16px
```

#### Layout (12-17 қаторлар)
```css
Max-width: 1200px
Padding: 24px
```

#### Components
- Header (19-41)
- Hero (43-88)
- Product Card (90-133)
- Content Sections (135-189)
- Order Form (191-256)
- FAQ (258-299)
- Testimonials (301-363)
- Buttons (415-449)
- Responsive (451-502)

**Ранг ўзгартириш:**

```css
/* Primary rangni o'zgartirish */
/* 2563eb ni yangi rangga almashtiring */

.btn-primary {
  background: #2563eb;  /* Bu yerda */
}
```

---

### 5. `components/Header.js`

**Вазифаси:** Навигация

**Линклар:**
- Home (/)
- Success Stories (/news)

**Ўзгартириш:**

```javascript
// 6-7-qatorlar
<Link href="/">Home</Link>
<Link href="/news">Success Stories</Link>
```

---

### 6. `components/OrderForm.js`

**Вазифаси:** Буюртма формаси

**Майдонлар:**
1. Full Name
2. Phone Number (+998)
3. Region (14 вилоят)
4. Quantity (1-10)

**Асосий функциялар:**

**Нарҳ ҳисоблаш:**
```javascript
// 47-қатор
const totalPrice = 129000 * formData.quantity
```

**Таймер:**
```javascript
// 11-қатор
const [timer, setTimer] = useState(900) // 15 minutes
```

**Form submission:**
```javascript
// 29-32-қаторлар
const handleSubmit = (e) => {
  e.preventDefault()
  alert('Буюртма қабул қилинди!')
}
```

**Вилоят қўшиш:**

```javascript
// 96-қаторга қўшинг
<option value="new_region">Yangi Viloyat</option>
```

---

### 7. `components/FAQ.js`

**Вазифаси:** Accordion FAQ

**Саволлар сони:** 4 та

**Янги савол қўшиш:**

```javascript
// 4-қаторга қўшинг
const faqs = [
  // ... mavjud savollar
  {
    question: "Yangi savol?",
    answer: "Javob matni..."
  }
]
```

---

### 8. `package.json`

**Зависимостлар:**

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

**Scripts:**
- `npm run dev` - Development
- `npm run build` - Production build
- `npm start` - Production server

**Янги пакет қўшиш:**

```bash
npm install package-name
```

---

### 9. `next.config.js`

**Мазмун:**

```javascript
module.exports = {
  output: 'standalone'
}
```

**Қачон ўзгартирилади:**
- Image optimization керак бўлса
- Custom webpack config
- Environment variables

---

### 10. `.gitignore`

**Игнор файллар:**
- `node_modules/`
- `.next/`
- `.env.local`

**Янги файл игнор қилиш:**

```
# .gitignore ga qo'shing
/your-folder
*.log
```

---

## 🔄 Кенг ўзгаришлар

### Янги саҳифа қўшиш

**1. Файл яратинг:**
```bash
mkdir app/about
touch app/about/page.js
```

**2. Код ёзинг:**
```javascript
export default function About() {
  return <h1>About Page</h1>
}
```

**3. Линк қўшинг:**
```javascript
// components/Header.js ga
<Link href="/about">About</Link>
```

---

### Янги компонент яратиш

**1. Файл яратинг:**
```bash
touch components/NewComponent.js
```

**2. Код ёзинг:**
```javascript
export default function NewComponent() {
  return <div>New Component</div>
}
```

**3. Импорт қилинг:**
```javascript
// app/page.js da
import NewComponent from '../components/NewComponent'
```

---

### Янги стил қўшиш

**globals.css га қўшинг:**

```css
/* app/globals.css охирига */
.my-new-class {
  color: blue;
  font-size: 18px;
}
```

**Ишлатинг:**

```javascript
<div className="my-new-class">Text</div>
```

---

## 📊 Файл ҳажмлари

| Файл | Ҳажм | Изоҳ |
|------|------|------|
| `app/page.js` | ~6 KB | Асосий саҳифа |
| `app/news/page.js` | ~7 KB | Янгиликлар |
| `app/globals.css` | ~16 KB | Барча стиллар |
| `components/OrderForm.js` | ~5 KB | Форма |
| `components/FAQ.js` | ~2 KB | FAQ |
| `public/product.png` | ~50 KB | Расм |
| **ЖАМИ** | **~86 KB** | Сиқилмаган |

**Optimized (production):**
- JavaScript: ~5 KB (gzip)
- CSS: ~8 KB (gzip)
- HTML: ~3 KB (gzip)
- **ЖАМИ:** ~16 KB ⚡

---

## ✅ Текшириш

Ҳар бир файлни текшириш учун:

### app/page.js
- [ ] Hero section кўринадӣми?
- [ ] Статистика тўғрими?
- [ ] FAQ ишлайдими?
- [ ] Order form борми?

### app/news/page.js
- [ ] 6 та testimonial борми?
- [ ] Testimonial cardлар кўринадими?
- [ ] Симптомлар рўйхати тўлиқми?

### components/OrderForm.js
- [ ] Барча майдонлар ишлайдими?
- [ ] Таймер ишлайдими?
- [ ] Нарҳ тўғри ҳисобланадими?

### components/FAQ.js
- [ ] Accordion очилади/ёпиладими?
- [ ] 4 та савол борми?

### app/globals.css
- [ ] Стиллар қўлланадими?
- [ ] Responsive ишлайдими?
- [ ] Ранглар тўғрими?

---

## 🎓 Қўлланма

Файл бilan ishlash:

**1. Кўриш:**
```bash
cat app/page.js
```

**2. Тахрирлаш:**
```bash
nano app/page.js
# yoki
code app/page.js
```

**3. Текшириш:**
```bash
npm run dev
```

---

**Яратилди:** 2026-01-31  
**Версия:** 2.0.0  
**Файллар:** 15 та
