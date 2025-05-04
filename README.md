# Tulip Festival Internationalization System

This project implements a comprehensive internationalization (i18n) system for the Ottawa Tulip Festival app, with URL-based language selection.

## Features

- JSON-based content management for easy text updates
- Route-based language selection (`/en/stop/1`, `/fr/stop/1`)
- Language toggle UI for easy switching
- Automatic redirection from `/` to default language (`/en`)
- Localized UI elements and stop content
- Language fallback system when content is missing
- Clean separation of content from presentation logic

## Structure

### URL Structure

The application uses language prefixes in all URLs:

- `/en` - English home page
- `/fr` - French home page
- `/en/stop/1` - English Stop 1 page
- `/fr/stop/2` - French Stop 2 page

Legacy routes (`/stop/1`) automatically redirect to the default language (`/en/stop/1`).

### Content Files

Content is stored in JSON files in the `src/locales` directory:

- `stops-en.json` - English content
- `stops-fr.json` - French content (sample)

Each language file follows the same structure:

```json
{
  "ui": {
    "pageTitle": "...",
    "backButton": "...",
    "homeTitle": "...",
    "stopLabel": "..."
  },
  "stops": {
    "1": {
      "title": "...",
      "content": ["paragraph1", "paragraph2", ...],
      "tulips": {
        "sectionTitle": "...",
        "varieties": [
          {
            "name": "...",
            "description": "..."
          },
          ...
        ]
      }
    },
    "2": { ... },
    ...
  }
}
```

### Utilities

The i18n system is managed through `src/utils/i18n.ts`:

- `getStopContent(stopId, lang)` - Retrieves content for a specific stop
- `getUIText(lang)` - Gets UI text for a specific language
- `getAvailableLanguages()` - Lists all available languages
- `isLanguageSupported(lang)` - Checks if a language is supported
- `DEFAULT_LANGUAGE` - Constant for the default language (en)

### Components

- `App.tsx` - Sets up routing with language path prefixes
- `HomePage` - Language-aware home page with stop buttons
- `StopPage` - Language-aware stop details page

## Adding a New Language

To add a new language:

1. Create a new file `src/locales/stops-[lang-code].json` following the same structure as existing language files
2. The system will automatically detect and make the new language available in the language selector
3. The new language will be accessible at `/[lang-code]` and `/[lang-code]/stop/:id` routes

## Future Improvements

- Add more languages
- Create content management tools for non-technical editors
- Add support for RTL languages
- Implement route-based audio file selection for different languages
