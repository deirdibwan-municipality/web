// ⚙️ إعدادات المشروع — عدّل السطرين هاي بس بعد ما تربط Google Apps Script

// رابط الـ Web App اللي بتاخده بعد "نشر" (Deploy) على Google Apps Script
// شكله عادة: https://script.google.com/macros/s/XXXXXXXXXXXX/exec
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtA7PmALAE6M-2WTuQfAloxJ-6hZJHJAp_22uhrrS8A6gPEna_r1s8JxYvNq9fLVP78w/exec";

// كلمة سر بسيطة تمنع أي حدا يضيف تبرعات من غير علمك
// لازم تكون مطابقة تماماً لقيمة SECRET بملف Code.gs
const ADMIN_SECRET = "123";

// اسم الحملة اللي بيبين فوق (اختياري)
const CAMPAIGN_TITLE = "حملة تبرعات";
 
