// lib/data/testimonials.ts

/**
 * This file contains data specific to client testimonials.
 * It defines the structure for a testimonial and provides an array of
 * customer testimonials, along with content for the testimonials section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Testimonial Interface (`Testimonial`):**
 *     -   Defines the properties for each testimonial (id, name, role, content, etc.).
 *
 * 2.  **Testimonials Array (`testimonials`):**
 *     -   Replace the placeholder content with real quotes from your clients.
 *     -   Update the `name`, `role`, `content`, `rating`, `image` path, and
 *         optional `link` for each testimonial.
 *     -   Ensure `image` paths correspond to images in the `public/testimonials`
 *         directory.
 *
 * 3.  **Testimonials Section Content (`testimonialsSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         `trustIndicators` (e.g., number of happy clients, average rating).
 */

// ============================================================================
// Testimonial Interface and Data
// ============================================================================

/**
 * @const testimonialsSectionContent
 * An object containing the content for the testimonials section, typically displayed
 * on the homepage or a dedicated testimonials page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the testimonials section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `trustIndicators`: Update values and labels for social proof.
 */
export const testimonialsSectionContent = {
  sectionTitle: "Testimonials",
  title: "What Our Customers Say",
  subtitle: "Don't just take our word for it. Here's what homeowners and property managers have to say about our lawn care services.",
  trustIndicators: [
    {
      value: "500+",
      label: "Happy Customers"
    },
    {
      value: "4.9",
      label: "Google Rating"
    },
    {
      value: "100%",
      label: "Would Recommend"
    }
  ]
};

/**
 * @interface Testimonial
 * Defines the structure for a testimonial object.
 *
 * @property {number} id - A unique identifier for the testimonial.
 * @property {string} name - The name of the client giving the testimonial.
 * @property {string} role - The role or title of the client (e.g., "Business Owner").
 * @property {string} content - The text of the testimonial.
 * @property {number} rating - A rating from 1 to 5.
 * @property {string} image - The path to the client's image (e.g., "/testimonials/client-1.jpg").
 * @property {string} [link] - An optional URL to the actual review or client website.
 */
export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  link?: string // Optional link to the actual review
}

/**
 * @const testimonials
 * An array of testimonial objects from your clients.
 * This data is used to build social proof and trust.
 *
 * === How to Customize ===
 * - Replace the placeholder objects with real testimonials.
 * - Update the `name`, `role`, `content`, `rating`, and `image` for each entry.
 * - Ensure the `image` path corresponds to an image in `public/testimonials`.
 * - Optionally add a `link` if the testimonial is verifiable online.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "GreenScape has been maintaining our lawn for 3 years now. They're always on time, professional, and our yard has never looked better. The neighbors constantly ask who does our lawn!",
    rating: 5,
    image: "/testimonials/client-1.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Property Manager",
    content: "We use GreenScape for all 12 of our rental properties. Their commercial team is efficient, reliable, and the pricing is very competitive. Highly recommend for property managers.",
    rating: 5,
    image: "/testimonials/client-2.jpg",
    link: "#"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Homeowner",
    content: "After struggling with brown patches for years, GreenScape's fertilization program completely transformed our lawn. It's now the greenest on the block!",
    rating: 5,
    image: "/testimonials/client-3.jpg",
    link: "#"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Business Owner",
    content: "First impressions matter for our dental practice. GreenScape keeps our grounds immaculate year-round. Our patients always comment on how nice the landscaping looks.",
    rating: 5,
    image: "/testimonials/client-4.jpg",
    link: "#"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Homeowner",
    content: "The fall cleanup crew was amazing! They cleared every leaf, cleaned the gutters, and even trimmed the hedges. My yard was ready for winter in just one visit.",
    rating: 5,
    image: "/testimonials/client-5.jpg",
    link: "#"
  },
  {
    id: 6,
    name: "David Wilson",
    role: "HOA President",
    content: "GreenScape has been our HOA's lawn care provider for 5 years. They maintain our common areas beautifully and are always responsive to our requests. Great communication!",
    rating: 5,
    image: "/testimonials/client-6.jpg",
    link: "#"
  },
  {
    id: 7,
    name: "Jennifer Martinez",
    role: "Homeowner",
    content: "We had a serious grub problem that was destroying our lawn. GreenScape's pest control treatment saved our yard! The grass came back fuller than ever.",
    rating: 5,
    image: "/testimonials/client-7.jpg",
    link: "#"
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "Retired",
    content: "As a senior, I can no longer maintain my own lawn. GreenScape gives me peace of mind knowing my yard always looks great. Fair prices and friendly service.",
    rating: 5,
    image: "/testimonials/client-8.jpg",
    link: "#"
  },
  {
    id: 9,
    name: "Amanda Foster",
    role: "Homeowner",
    content: "The aeration and overseeding service was worth every penny. Our thin, patchy lawn is now thick and lush. Should have done this years ago!",
    rating: 5,
    image: "/testimonials/client-9.jpg",
    link: "#"
  },
  {
    id: 10,
    name: "Kevin O'Brien",
    role: "Restaurant Owner",
    content: "Our outdoor patio area needs to look perfect for customers. GreenScape's weekly maintenance keeps everything pristine. They're a key part of our business success.",
    rating: 5,
    image: "/testimonials/client-10.jpg",
    link: "#"
  }
];
