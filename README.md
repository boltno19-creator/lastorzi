# 1998 Orzi - Bracelet Landing Page

Modern, responsive Arabic landing page for ordering Orzi bracelets with Google Sheets integration.

## Features

- **Fully Arabic Interface**: Complete RTL support with Cairo font
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Brand Colors**: Beige (#E8D7C3) and Navy Blue (#1B3B4D) from the Orzi logo
- **Social Media Integration**: Direct links to TikTok and Instagram
- **Product Showcase**: Beautiful display of straight and curved bracelet designs
- **Smart Order Form**:
  - Dynamic area selection based on governorate
  - Visual bracelet style selection with images
  - Complete validation
  - Success confirmation modal
- **Google Sheets Ready**: Backend prepared for order management via Google Apps Script

## Order Form Fields

1. Name (required)
2. Phone number (required)
3. Governorate (dropdown: Cairo, Giza, Alexandria) (required)
4. Area (dynamic dropdown based on governorate) (required)
5. Full address (required)
6. Bracelet style selection with image preview (required)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google Sheets Integration

Follow the detailed guide in `GOOGLE_SHEETS_SETUP.md` to:
- Create your Google Sheet
- Set up Google Apps Script
- Deploy the web app
- Update the script URL in the code

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## Governorates and Areas

The form includes the following Egyptian governorates with their areas:

### Cairo (القاهرة)
- Nasr City, Maadi, Zamalek, Heliopolis, 5th Settlement, Shorouk, Mokattam, Helwan, Maasara, Manial

### Giza (الجيزة)
- Dokki, Mohandessin, Haram, Faisal, Omraneya, 6th October, Sheikh Zayed, Hawamdiya, Badrashin, Oseem

### Alexandria (الإسكندرية)
- Montazah, Raml, Smouha, Sidi Gaber, Moharam Bek, Asafra, Borg El Arab, Abu Qir, Ibrahimiya, Karmouz

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Cairo Font** from Google Fonts for Arabic text
- **Lucide React** for icons
- **Google Apps Script** for backend integration

## Project Structure

```
src/
├── components/
│   ├── OrderForm.tsx       # Main order form component
│   └── SuccessModal.tsx    # Success confirmation modal
├── types/
│   └── form.ts             # TypeScript types and data
├── App.tsx                 # Main app component
├── index.css               # Global styles with Cairo font
└── main.tsx                # App entry point
```

## Bracelet Specifications

- **Material**: Brass Bronze
- **Coating**: Nickel-plated
- **Resistant**: To discoloration and rust
- **Size**: Adjustable to fit all wrists
- **Color**: Silver
- **Suitable for**: Both men and women

## Design Highlights

- Clean, modern aesthetic with classic touches
- Smooth hover effects and transitions
- Professional color scheme matching brand identity
- Intuitive user experience
- Mobile-first responsive design
- High-quality product images

## Social Media

- **TikTok**: [@orzi.eg](https://www.tiktok.com/@orzi.eg)
- **Instagram**: [@orzi.eg](https://www.instagram.com/orzi.eg)

## Support

For Google Sheets integration help, see `GOOGLE_SHEETS_SETUP.md`
