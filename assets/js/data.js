/*
  ✏️  محتوای قابل‌ویرایش سایت
  پروژه‌ها و مهارت‌ها را از همین‌جا تغییر بده؛ بقیه‌ی سایت خودکار به‌روز می‌شود.
*/
window.SITE = {
  email: "khodamihamed77@gmail.com",

  /* مهارت‌ها: گروه‌بندی بر اساس حوزه. key = نام آیکن در icons.js */
  skillGroups: [
    {
      id: "backend", title: "بک‌اند", badge: "تخصص اصلی", lead: true,
      text: "قلب کار من؛ از طراحی API تا پردازش پس‌زمینه و مستندسازی.",
      items: [
        { key: "python", name: "Python", note: "زبان اصلی" },
        { key: "django", name: "Django", note: "فریمورک اصلی" },
        { key: "drf", name: "Django REST", note: "طراحی API" },
        { key: "fastapi", name: "FastAPI", note: "سرویس‌های سبک" },
        { key: "celery", name: "Celery", note: "پردازش ناهمزمان" },
        { key: "swagger", name: "Swagger", note: "مستندسازی API" },
      ],
    },
    {
      id: "data", title: "داده و کیفیت",
      text: "ذخیره‌سازی درست و تست‌هایی که اطمینان می‌دهند.",
      items: [
        { key: "postgresql", name: "PostgreSQL", note: "پایگاه داده" },
        { key: "redis", name: "Redis", note: "کش و صف" },
        { key: "pytest", name: "Pytest", note: "تست و پوشش بالا" },
      ],
    },
    {
      id: "devops", title: "استقرار و ابزار",
      text: "از کد تا سرور واقعی روی لینوکس.",
      items: [
        { key: "linux", name: "Linux", note: "سرور" },
        { key: "docker", name: "Docker", note: "کانتینر" },
        { key: "nginx", name: "Nginx", note: "وب‌سرور" },
        { key: "git", name: "Git", note: "کنترل نسخه" },
      ],
    },
    {
      id: "web", title: "وب و فرانت‌اند", badge: "در Trolut",
      text: "رابط‌هایی که کنار بک‌اند می‌نشینند؛ و استک روزمره‌ام در تیم آلمانی.",
      items: [
        { key: "laravel", name: "Laravel", note: "PHP" },
        { key: "vue", name: "Vue.js", note: "رابط کاربری" },
        { key: "javascript", name: "JavaScript", note: "منطق صفحه" },
        { key: "tailwind", name: "Tailwind CSS", note: "استایل" },
      ],
    },
  ],

  /* پروژه‌ها (فعلاً تستی). هر تعداد که اضافه کنی، ردیف‌های سه‌تایی خودکار ساخته می‌شود.
     image: آدرس عکس (اختیاری) — اگر خالی باشد یک کاور گرافیکی ساخته می‌شود. */
  projects: [
    {
      title: "طلاشاح",
      text: "پلتفرم آنلاین خرید فروش طلا، سکه، دلار و نقره",
      tags: ["طلافروشی", "فروشگاهی", "طلای آبشده"],
      url: "https://talashah.ir", image: "./images/talashah.png",
    },
    {
      title: "طلافروشی کیانمهر",
      text: "خرید و فروش طلا و محصولات زینتی.",
      tags: ["سکه", "محصولات زینتی طلا"],
      url: "https://kianmehrjewellry.com", image: "./images/kianmehr.png",
    },
    {
      title: "مدرسه نجوا",
      text: "مدرسه هوشمند نجوا برای مدیران و معلمان و دانش آموزان.",
      tags: ["مدرسه ی هوشمند", "داشبورد اختصاصی"],
      url: "https://najvasch.ir", image: "./images/najva.png",
    },
  ],
};
