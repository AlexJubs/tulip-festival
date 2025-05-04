import { Link, useParams, Navigate } from "react-router-dom";
import {
  getAvailableLanguages,
  getUIText,
  isLanguageSupported,
} from "./utils/i18n";

function HomePage() {
  // Get language from URL parameter
  const { lang = "en" } = useParams<{ lang: string }>();

  // If language is not supported, redirect to English
  if (!isLanguageSupported(lang)) {
    return <Navigate to="/en" replace />;
  }

  // Get UI text for the current language
  const ui = getUIText(lang);
  const availableLanguages = getAvailableLanguages();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-3">
      <h1 className="text-xl font-bold">{ui.homeTitle}</h1>
      <div className="flex gap-2">
        {availableLanguages.map((language) => (
          <Link
            key={language}
            to={`/${language}`}
            className={`px-2 py-1 rounded-md ${language === lang ? "bg-gray-200" : "bg-foreground text-background"}`}
          >
            {language.toUpperCase()}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((stopNumber) => (
          <Link
            key={stopNumber}
            to={`/${lang}/stop/${stopNumber}`}
            className="px-6 py-4 bg-[#69CAD8] text-white rounded-lg hover:border-gray-400 transition-all duration-200 text-center shadow-md hover:shadow-lg text-lg font-medium"
          >
            {ui.stopLabel} {stopNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
