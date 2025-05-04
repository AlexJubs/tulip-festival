import { useParams, Link, Navigate } from "react-router-dom";
import {
  getStopContent,
  getAvailableLanguages,
  isLanguageSupported,
} from "./utils/i18n";

function StopPage() {
  // Get both stopId and language from URL parameters
  const { id, lang = "en" } = useParams<{ id: string; lang: string }>();
  const stopId = id || "1";
  const audioFileName = `stop${stopId}-${lang}.mp3`;

  // If language is not supported, redirect to English version
  if (!isLanguageSupported(lang)) {
    return <Navigate to={`/en/stop/${stopId}`} replace />;
  }

  const { ui, stop } = getStopContent(stopId, lang);
  const availableLanguages = getAvailableLanguages();

  if (!stop) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold py-2">
          {ui.pageTitle} {stopId}
        </h1>
        <Link
          to={`/${lang}`}
          className="px-5 py-2 bg-[#69CAD8] text-white rounded-md border-1 hover:opacity-90 transition-opacity my-1"
        >
          {ui.backButton}
        </Link>
        <div className="w-full max-w-3xl text-center my-8">
          Stop content not found
        </div>
      </div>
    );
  }

  // Generate unique keys for content paragraphs without using index directly in the JSX
  const contentKeys = stop.content.map(
    (_, idx) => `stop-${stopId}-para-${idx}`,
  );

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl flex justify-between items-center">
        <h1 className="text-xl font-bold py-2">
          {ui.pageTitle} {stopId}
        </h1>
        <div className="flex gap-2">
          {availableLanguages.map((language) => (
            <Link
              key={language}
              to={`/${language}/stop/${stopId}`}
              className={`px-2 py-1 rounded-md ${language === lang ? "bg-gray-200" : "bg-foreground text-background"}`}
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
      <Link
        to={`/${lang}`}
        className="px-5 py-2 bg-[#69CAD8] text-white text-semibold rounded-md border-1 hover:opacity-90 transition-opacity my-1"
      >
        {ui.backButton}
      </Link>
      <div className="w-full max-w-3xl flex flex-col items-center my-2">
        <audio controls className="w-full">
          <source src={`/${audioFileName}`} type="audio/mp3" />
          <track kind="captions" src={`/stop${stopId}.vtt`} label="English" />
        </audio>
      </div>
      <div className="w-screen max-w-3xl bg-white shadow-sm p-6 overflow-y-auto max-h-[72vh] text-left">
        <h2 className="text-xl font-bold mb-4">{stop.title}</h2>
        {stop.content.map((paragraph, index) => (
          <p key={contentKeys[index]} className="mb-4">
            {paragraph}
          </p>
        ))}

        <h2 className="text-xl font-bold mb-4">{stop.tulips.sectionTitle}</h2>

        {stop.tulips.varieties.map((tulip) => (
          <div key={`tulip-${stopId}-${tulip.name}`}>
            <h3 className="text-lg font-semibold mt-4">{tulip.name}</h3>
            <p className="mb-4">{tulip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StopPage;
