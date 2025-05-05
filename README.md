# Peekaboo Angular Client Side

**Peekaboo**  Angular הוא פרויקט צד לקוח שנבנה באמצעות .
הפרויקט מספק ממשק משתמש אינטראקטיבי לניהול מוצרים, עגלת קניות, רישום משתמשים ועוד.





---

## תכונות הפרויקט

- **רישום משתמשים**: רישום משתמשים חדשים למערכת.
- **ניהול עגלת קניות**: הוספה, עדכון והסרה של מוצרים בעגלה.
- **ניהול מוצרים**: הצגת פרטי מוצרים, סינון מוצרים ועוד.
- **עיצוב רספונסיבי**: מותאם לכל סוגי המסכים.
- **אינטגרציה עם API**: שליפת נתונים ועדכונם באמצעות API.

- 

---

## מבנה הפרויקט

angularProject/ ├── public/ # קבצים סטטיים (תמונות, גופנים וכו') ├── src/ │ ├── app/ │ │ ├── classes/ # מודלים (Product, Customer וכו') │ │ ├── services/ # שירותים לתקשורת עם ה-API │ │ ├── app.component.* # הקומפוננטה הראשית │ │ ├── app.routes.ts # הגדרות ניתוב │ ├── componnents/ # קומפוננטות │ │ ├── cart/ # קומפוננטת עגלת קניות │ │ ├── product/ # קומפוננטת מוצר │ │ ├── register/ # קומפוננטת רישום משתמשים │ │ ├── size/ # קומפוננטת ניהול גדלים │ │ ├── more-details/ # קומפוננטת פרטים נוספים │ ├── styles.css # עיצוב גלובלי ├── angular.json # הגדרות Angular CLI ├── package.json # תלות בפרויקט ├── README.md # תיעוד הפרויקט






---

## קומפוננטות ופונקציות

### 1. **RegisterComponent**
**מיקום**: `src/componnents/register/register.component.ts`

פונקציות:
- **`registerC()`**: 
  - תיאור: רושמת משתמש חדש למערכת.
  - פעולה: שולחת את פרטי המשתמש לשירות `CustomerService` ומעדכנת את המשתמש הנוכחי.
  - שימוש ב-SweetAlert2 להצגת הודעות הצלחה או שגיאה.
 
  - 

---

### 2. **CartComponent**
**מיקום**: `src/componnents/cart/cart.component.ts`

פונקציות:
- **`add1(p: Product)`**:
  - תיאור: מוסיפה יחידה אחת למוצר בעגלה.
  - פעולה: מעדכנת את הכמות של המוצר בעגלה.
- **`les1(p: Product)`**:
  - תיאור: מפחיתה יחידה אחת מהמוצר בעגלה.
  - פעולה: מעדכנת את הכמות של המוצר בעגלה.
- **`removeFromCart(item: CartItem)`**:
  - תיאור: מסירה מוצר מהעגלה.
  - פעולה: מעדכנת את רשימת המוצרים בעגלה.

---

### 3. **MoreDetailsComponent**
**מיקום**: `src/componnents/more-details/more-details.component.ts`

פונקציות:
- **`getAllProducts()`**:
  - תיאור: שולפת את כל המוצרים מהשירות `ProductService`.
  - פעולה: מאחסנת את רשימת המוצרים במשתנה `allProducts`.
- **`more(productId: number)`**:
  - תיאור: מציגה פרטים נוספים על מוצר מסוים.
  - פעולה: מוצאת את המוצר לפי `productId` ומציגה את פרטיו.

---



---

## התקנה

1. שיבוט הריפוזיטורי:
   ```bash
   git clone https://github.com/RuthSchiff/Peekaboo-Angular-Client-Side.git


מעבר לתיקיית הפרויקט:


cd Peekaboo-Angular-Client-Side
התקנת התלויות:
npm install
הרצת השרת:
ng serve
פתיחה בדפדפן:
http://localhost:4200















# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
