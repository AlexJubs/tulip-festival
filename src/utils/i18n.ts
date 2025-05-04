import enData from "../locales/stops-en.json";
import frData from "../locales/stops-fr.json";

// Define types for our JSON structure
type TulipVariety = {
  name: string;
  description: string;
};

type StopContent = {
  title: string;
  content: string[];
  tulips: {
    sectionTitle: string;
    varieties: TulipVariety[];
  };
};

type UIText = {
  pageTitle: string;
  backButton: string;
  homeTitle: string;
  stopLabel: string;
};

type LocaleDataStructure = {
  ui: UIText;
  stops: {
    [stopId: string]: StopContent;
  };
};

// This type of structure allows for future language expansion
type LocaleData = {
  [lang: string]: LocaleDataStructure;
};

// Add more languages here as they become available
const locales: LocaleData = {
  en: enData as LocaleDataStructure,
  fr: frData as LocaleDataStructure,
};

// Default language if none specified
export const DEFAULT_LANGUAGE = "en";

// Get all available languages
export const getAvailableLanguages = (): string[] => {
  return Object.keys(locales);
};

// Check if a language is supported
export const isLanguageSupported = (lang: string): boolean => {
  return getAvailableLanguages().includes(lang);
};

// Get UI text for a specific language
export const getUIText = (lang: string = DEFAULT_LANGUAGE): UIText => {
  const actualLang = isLanguageSupported(lang) ? lang : DEFAULT_LANGUAGE;
  return locales[actualLang].ui;
};

// Get content for a specific stop in a specific language
export const getStopContent = (stopId: string, lang = DEFAULT_LANGUAGE) => {
  // Default to English if requested language not available
  const actualLang = isLanguageSupported(lang) ? lang : DEFAULT_LANGUAGE;
  const data = locales[actualLang];

  // If the stop doesn't exist in the requested language, fall back to English
  if (!data.stops[stopId] && actualLang !== DEFAULT_LANGUAGE) {
    console.log(
      `Stop ${stopId} not found in ${actualLang}, falling back to English`,
    );
    return {
      ui: data.ui,
      stop: locales[DEFAULT_LANGUAGE].stops[stopId] || null,
    };
  }

  // Return UI text and stop-specific content
  return {
    ui: data.ui,
    stop: data.stops[stopId] || null,
  };
};

export default {
  getStopContent,
  getUIText,
  getAvailableLanguages,
  isLanguageSupported,
  DEFAULT_LANGUAGE,
};
