import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageRecognitionService {
  private googleVisionUrl = 'https://vision.googleapis.com/v1/images:annotate';
  private apiKey = 'AIzaSyB0x_7dNxlGoIYpecpgqsexXg7xIHJJsOo'; // שמור מפתח סודי בקובץ environment

  constructor(private http: HttpClient) {}

  recognizeImage(imageData: string): Observable<any> {
    const requestBody = {
      requests: [
        {
          image: {
            content: imageData,
          },
          features: [
            { type: 'LABEL_DETECTION', maxResults: 10 },
            { type: 'FACE_DETECTION' },
          ],
        },
      ],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${this.googleVisionUrl}?key=${this.apiKey}`,
      requestBody,
      { headers }
    );
  }
}
