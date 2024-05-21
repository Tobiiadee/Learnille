/** @format */

import { CourseType } from "@/lib/types/course_tyeps";
import dateTime from "date-and-time";

export const removeCourse = (
  courses: CourseType[],
  courseId: string | number
) => {
  const courseArrayFilter = courses.filter((course) => course.id !== courseId);
  return courseArrayFilter;
};

export const formatDate = (
  dateObj: Date | string,
  formatString: string = "hh:mm A - ddd, MMM DD YYYY",
  utc?: boolean | undefined
): string => {
  const date = new Date(dateObj);

  const value = dateTime.format(date, formatString, utc);
  return value;
};

export function formatCurrency(value: number, currencyCode?: string) {
  const currency = currencyCode?.toUpperCase() || "NGN";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    maximumFractionDigits: 2,
  }).format(value);
}

export const removeWhiteSpace = (text: string, replaceWith: string) => {
  const stringWithHyphen = text.replace(/\s+/g, `${replaceWith}`);
  return stringWithHyphen;
};

export const textShortener = (text: string) => {
  const textArray = text.split("");
  if (textArray.length < 6) {
    return text;
  }
  const shortStart = textArray[5];
  const shortenedText =
    text.substring(0, text.indexOf(shortStart) + 25) + "...";
  return shortenedText;
};

// export function startWebcam() {
//   const video: HTMLVideoElement = document.getElementById("webcam-video")!;
//   if (!video) {
//     console.error("Video element not found");
//     return;
//   }
//   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream: MediaStream) => {
//         video.srcObject = stream;
//       })
//       .catch((error: Error) => {
//         console.error("Error accessing webcam:", error);
//         alert("Failed to access webcam. Please check your permissions.");
//       });
//   } else {
//     console.error("getUserMedia is not supported");
//     alert("Your browser does not support webcam access.");
//   }
// }

// export function stopWebcam() {
//   const video: HTMLVideoElement = document.getElementById("webcam-video")!;
//   if (!video) {
//     console.error("Video element not found");
//     return;
//   }
//   const stream: MediaStream = video.srcObject as MediaStream;
//   if (stream) {
//     const tracks = stream.getTracks();
//     tracks.forEach((track: MediaStreamTrack) => track.stop());
//     video.srcObject = null;
//   }
// }
