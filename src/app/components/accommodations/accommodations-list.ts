import { Accommodation } from "app/components/accommodations/accommodation-info/accommodation";
import { EncodeURIComponentPipe } from 'angular-pipes/src/string/encode-uri-component.pipe';

export const accommodations: [Accommodation] = [
    {
        name: "Tom Kennedy",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Montauk_Manor.jpg/1200px-Montauk_Manor.jpg",
        aboutParagraph: "Test test",
        address: "96 Gail Ct, 11731",
        phone: "631-707-4771",
        website: "http://google.com",
        blocked: true
    }
]