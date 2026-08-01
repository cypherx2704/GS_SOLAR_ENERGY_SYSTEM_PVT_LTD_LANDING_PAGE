/**
 * Testimonials — [PLACEHOLDER]. Marked `placeholder: true` and rendered in a
 * clearly-sample state so nothing reads as a real customer claim (PLAN §5, §16).
 */

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  segment: string;
  photo: string | null;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sample Customer",
    location: "Chennai",
    rating: 5,
    quote:
      "This is placeholder testimonial text. Real customer reviews — name, location, photo and quote — will appear here once provided.",
    segment: "Residential",
    photo: null,
    placeholder: true,
  },
  {
    name: "Sample Customer",
    location: "Coimbatore",
    rating: 5,
    quote:
      "Placeholder review. Replace with a genuine industrial/commercial client testimonial including their savings and experience.",
    segment: "Industrial",
    photo: null,
    placeholder: true,
  },
  {
    name: "Sample Customer",
    location: "Madurai",
    rating: 5,
    quote:
      "Placeholder review. Add a residential customer's words about bill reduction and the installation experience here.",
    segment: "Residential",
    photo: null,
    placeholder: true,
  },
];
