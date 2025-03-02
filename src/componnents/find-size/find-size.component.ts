// // import { Component } from '@angular/core';
// // import { ImageRecognitionService } from '../../app/services/ImageRecognition.service';  // הוספת השירות
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { BrowserModule } from '@angular/platform-browser';
// // // import { BrowserModule } from '@angular/platform-browser';

// // @Component({
// //   selector: 'app-size-guide',
// //   standalone: true,
// //   templateUrl: './find-size.component.html',
// //   styleUrls: ['./find-size.component.css'],
// //   imports: [FormsModule , CommonModule]
 
// // })
// // export class FindSizeComponent {
// //   age: number = 0;
// //   weight: number = 0;
// //   height: number = 0;
// //   headCircumference: number = 0;
// //   chestCircumference: number = 0;
// //   waistCircumference: number = 0;
// //   size: string = '';
  
// //   imageUrl: string | null = null;
// //   imageBase64: string | null = null;

// //   constructor(private imageRecognitionService: ImageRecognitionService) {}

// //   // חישוב הגודל המתאים לפי הגיל, משקל, גובה ופרופיל גוף
// //   calculateSize() {
// //     if (this.age <= 3) {
// //       this.size = "Size 0-3 months";
// //     } else if (this.age <= 6) {
// //       this.size = "Size 3-6 months";
// //     } else if (this.age <= 12) {
// //       this.size = "Size 6-12 months";
// //     } else {
// //       this.size = "Size 1 year+";
// //     }

// //     // התאמת גודל לפי היקפים (אם היקף החזה והמותן גדולים מהממוצע)
// //     if (this.chestCircumference > 50 && this.waistCircumference > 45) {
// //       this.size = "Size 1 year+ (Full body)";
// //     }
// //   }

// //   // פונקציה להעלאת תמונה
// //   onImageUpload(event: any) {
// //     const file = event.target.files[0];
// //     if (file) {
// //       this.imageUrl = URL.createObjectURL(file);
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         this.imageBase64 = reader.result as string;
// //         this.recognizeImage(this.imageBase64);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   }

// //   // זיהוי תמונה וניתוח מידע
// //   recognizeImage(imageData: string) {
// //     this.imageRecognitionService.recognizeImage(imageData).subscribe(response => {
// //       console.log('תשובה מה-API:', response);
// //       // ניתוח התשובה ממערכת Google Vision
// //       const labels = response.responses[0].labelAnnotations;
// //       const faces = response.responses[0].faceAnnotations;

// //       // אם זיהינו פנים, ננסה להוציא גיל אופטימלי מהתמונה
// //       if (faces && faces.length > 0) {
// //         const age = this.estimateAgeFromFace(faces[0]);
// //         this.age = age;
// //       }

// //       // זיהוי תוויות מתוך התמונה (אם יש תווית שיכולה להצביע על גיל או מדידה אחרת)
// //       labels.forEach((label: any) => {
// //         if (label.description.toLowerCase().includes('baby')) {
// //           this.size = 'Size 0-3 months'; // ברירת מחדל כשיש זיהוי של תינוק בתמונה
// //         }
// //       });

// //       // חישוב הגודל מחדש לאחר שזיהינו פרטים מהתמונה
// //       this.calculateSize();
// //     });
// //   }

// //   // חישוב גיל אופטימלי לפי גיל הפנים בתמונה (אם ניתן)
// //   estimateAgeFromFace(face: any): number {
// //     // נניח שבשדה ageRange נמצא טווח גיל המתאים
// //     if (face.ageRange) {
// //       const minAge = face.ageRange.min;
// //       const maxAge = face.ageRange.max;
// //       return (minAge + maxAge) / 2;
// //     }
// //     return 0;
// //   }
// // }

// import { Component } from '@angular/core';
// import { ImageRecognitionService } from '../../app/services/ImageRecognition.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// @Component({
//   selector: 'app-size-guide',
//   standalone: true,
//   templateUrl: './find-size.component.html',
//   styleUrls: ['./find-size.component.css'],
//   imports: [FormsModule, CommonModule]
// })
// export class FindSizeComponent {
//   age: number = 0;
//   weight: number = 0;
//   height: number = 0;
//   headCircumference: number = 0;
//   chestCircumference: number = 0;
//   waistCircumference: number = 0;
//   size: string = '';
//   imageUrl: string | null = null;
//   imageBase64: string | null = null;
//   safeImageUrl: SafeUrl | null = null;

//   constructor(private imageRecognitionService: ImageRecognitionService, private sanitizer: DomSanitizer) { }

//   calculateSize() {
//     if (this.age <= 3) {
//       this.size = "Size 0-3 months";
//     } else if (this.age <= 6) {
//       this.size = "Size 3-6 months";
//     } else if (this.age <= 12) {
//       this.size = "Size 6-12 months";
//     } else {
//       this.size = "Size 1 year+";
//     }

//     if (this.chestCircumference > 50 && this.waistCircumference > 45) {
//       this.size = "Size 1 year+ (Full body)";
//     }
//   }

//   onImageUpload(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       this.imageUrl = URL.createObjectURL(file);
//       this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         this.imageBase64 = reader.result as string;
//         this.recognizeImage(); // קריאה לפונקציה ללא ארגומנטים
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   recognizeImage() {
//     if (this.imageBase64) {
//       this.imageRecognitionService.recognizeImage(this.imageBase64).subscribe(response => {
//         console.log('תשובה מה-API:', response);

//         const labels = response.responses[0].labelAnnotations;
//         const faces = response.responses[0].faceAnnotations;

//         if (faces && faces.length > 0) {
//           const age = this.estimateAgeFromFace(faces[0]);
//           this.age = age;
//         }

//         labels.forEach((label: any) => {
//           if (label.description.toLowerCase().includes('baby')) {
//             this.size = 'Size 0-3 months';
//           }
//         });

//         this.calculateSize();
//       });
//     } else {
//       console.error("לא הועלתה תמונה");
//     }
//   }

//   estimateAgeFromFace(face: any): number {
//     if (face.ageRange) {
//       const minAge = face.ageRange.min;
//       const maxAge = face.ageRange.max;
//       return (minAge + maxAge) / 2;
//     }
//     return 0;
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ImageRecognitionService } from '../../app/services/ImageRecognition.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// @Component({
//   selector: 'app-size-guide',
//   standalone: true,
//   templateUrl: './find-size.component.html',
//   styleUrls: ['./find-size.component.css'],
//   imports: [FormsModule, CommonModule]
// })
// export class FindSizeComponent implements OnInit{
//   age: number | null = null; // גיל יכול להיות null
//   weight: number | null = null; // משקל יכול להיות null
//   height: number | null = null; // גובה יכול להיות null
//   headCircumference: number | null = null; // היקף ראש יכול להיות null
//   chestCircumference: number | null = null; // היקף חזה יכול להיות null
//   waistCircumference: number | null = null; // היקף מותן יכול להיות null
//   size: string = '';
//   imageUrl: string | null = null;
//   imageBase64: string | null = null;
//   safeImageUrl: SafeUrl | null = null;
//   recognized: boolean = false; // משתנה לבדיקה אם התמונה כבר זוהתה

//   constructor(private imageRecognitionService: ImageRecognitionService, private sanitizer: DomSanitizer) { }

//   ngOnInit(): void {

//   }


//   onImageUpload(event: any) {
//     this.recognized = false; // איפוס מצב זיהוי
//     this.age = null; // איפוס גיל
//     this.weight = null; // איפוס משקל
//     this.height = null; // איפוס גובה
//     this.headCircumference = null; // איפוס היקף ראש
//     this.chestCircumference = null; // איפוס היקף חזה
//     this.waistCircumference = null; // איפוס היקף מותן
//     this.size = '';   // איפוס מידה

//     const file = event.target.files[0];
//     if (file) {
//       this.imageUrl = URL.createObjectURL(file);
//       this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.imageBase64 = e.target.result as string;
//         this.recognizeImage();
//       };
//       reader.onerror = (error) => {
//         console.error('Error reading image:', error);
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   recognizeImage() {
//     if (this.imageBase64 && !this.recognized) { // בדיקה אם imageBase64 קיים וטרם זוהה
//       this.recognized = true; // סימון שהתמונה זוהתה
//       this.imageRecognitionService.recognizeImage(this.imageBase64).subscribe(
//         (response) => {
//           console.log('תשובה מה-API:', response);

//           const labels = response.responses[0].labelAnnotations;
//           const faces = response.responses[0].faceAnnotations;

//           if (faces && faces.length > 0) {
//             const age = this.estimateAgeFromFace(faces[0]);
//             this.age = age;
//           }

//           // בדיקה אם קיימות תוויות רלוונטיות
//           const babyLabel = labels?.find(label => label.description.toLowerCase().includes('baby'));
//           const clothesLabel = labels?.find(label => label.description.toLowerCase().includes('clothes') || label.description.toLowerCase().includes('clothing'));

//           if (babyLabel) {
//             this.size = '0-3 months'; // גודל ברירת מחדל לתינוקות
//           } else if (clothesLabel) {
//             this.size = 'Unknown'; // גודל לא ידוע לבגדים
//           } else {
//             this.size = 'Unknown'; // גודל לא ידוע
//           }


//           this.calculateSize(); // חישוב גודל סופי
//         },
//         (error) => {
//           console.error('Error from Vision API:', error);
//           this.recognized = false; // איפוס מצב זיהוי במקרה של שגיאה
//           this.size = 'Error recognizing image'; // הודעת שגיאה למשתמש
//         }
//       );
//     } else if (!this.imageBase64) {
//       console.error("Image Base64 data is missing.");
//       this.size = 'No image uploaded'; // הודעה למשתמש שלא העלה תמונה
//     }
//   }

//   estimateAgeFromFace(face: any): number | null {
//     if (face.ageRange) {
//       const minAge = face.ageRange.min;
//       const maxAge = face.ageRange.max;
//       return (minAge + maxAge) / 2;
//     }
//     return null; // החזרת null אם אין טווח גיל
//   }


//   calculateSize() {
//     if (this.age !== null) { // בדיקה אם גיל קיים
//       if (this.age <= 3) {
//         this.size = "0-3 months";
//       } else if (this.age <= 6) {
//         this.size = "3-6 months";
//       } else if (this.age <= 12) {
//         this.size = "6-12 months";
//       } else {
//         this.size = "1 year+";
//       }
//     }
//   }
// }

// 

import { Component, OnInit } from '@angular/core';
import { ImageRecognitionService } from '../../app/services/ImageRecognition.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface Label {
  description: string;
}

@Component({
  selector: 'app-size-guide',
  standalone: true,
  templateUrl: './find-size.component.html',
  styleUrls: ['./find-size.component.css'],
  imports: [FormsModule, CommonModule],
})
export class FindSizeComponent implements OnInit {
  age: number | null = null;
  size: string = '';
  imageUrl: string | null = null;
  imageBase64: string | null = null;
  safeImageUrl: SafeUrl | null = null;
  recognized: boolean = false;

  constructor(
    private imageRecognitionService: ImageRecognitionService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  onImageUpload(event: any) {
    this.resetState();

    const file = event.target.files[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageBase64 = e.target.result.split(',')[1]; // הסרת תגית Base64
        this.recognizeImage();
      };
      reader.onerror = (error) => {
        console.error('Error reading image:', error);
      };
      reader.readAsDataURL(file);
    }
  }

  resetState() {
    this.recognized = false;
    this.age = null;
    this.size = '';
  }

  recognizeImage() {
    if (this.imageBase64 && !this.recognized) {
      this.recognized = true;

      this.imageRecognitionService.recognizeImage(this.imageBase64).subscribe(
        (response) => {
          console.log('תשובה מה-API:', response);

          const labels = response?.responses?.[0]?.labelAnnotations || [];
          const faces = response?.responses?.[0]?.faceAnnotations || [];

          if (faces.length > 0) {
            const age = this.estimateAgeFromFace(faces[0]);
            this.age = age;
          }
          const babyLabel = labels.find((label: Label) =>
            label.description.toLowerCase().includes('baby')
          );
          

          this.size = babyLabel ? '0-3 months' : 'Unknown';

          this.calculateSize();
        },
        (error) => {
          console.error('Error from Vision API:', error);
          this.recognized = false;
          this.size = 'Error recognizing image';
        }
      );
    } else {
      this.size = 'No image uploaded';
    }
  }

  estimateAgeFromFace(face: any): number | null {
    if (face.ageRange) {
      const minAge = face.ageRange.min;
      const maxAge = face.ageRange.max;
      return (minAge + maxAge) / 2;
    }
    return null;
  }

  calculateSize() {
    if (this.age !== null) {
      if (this.age <= 3) {
        this.size = '0-3 months';
      } else if (this.age <= 6) {
        this.size = '3-6 months';
      } else if (this.age <= 12) {
        this.size = '6-12 months';
      } else {
        this.size = '1 year+';
      }
    }
  }
}
