# سایت شخصی حامد خدامی

سایت استاتیک (HTML + Tailwind CSS v4 + JavaScript) بدون نیاز به بیلد؛ آماده‌ی GitHub Pages.

## انتشار در GitHub Pages
1. یک ریپو به نام `hamedkhodami.github.io` بساز (یا هر نام دیگر).
2. همه‌ی فایل‌های این پوشه را در ریشه‌ی ریپو بگذار و push کن.
3. Settings ← Pages ← Source: `Deploy from a branch` ← شاخه‌ی `main` و پوشه‌ی `/ (root)`.

## ویرایش محتوا
- پروژه‌ها و مهارت‌ها: `assets/js/data.js`
- متن‌ها (درباره من، سوابق، تماس): `index.html`

## ویرایش ظاهر (اختیاری)
فایل `assets/css/tailwind.css` از قبل ساخته شده است. اگر کلاس‌های Tailwind را تغییر دادی:
```bash
npx @tailwindcss/cli -i src/input.css -o assets/css/tailwind.css --minify
```
توکن‌های رنگ و فونت در بالای `src/input.css` هستند.
