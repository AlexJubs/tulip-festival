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
  
  // Audio file path
  const audioSrc = `/stop${stopId}-${lang}.mp3`;
  
  // Generate a unique key that changes when language or stop ID changes
  // This forces React to recreate the audio element when the language changes
  const audioKey = `audio-${lang}-${stopId}`;

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
      <div className="w-full max-w-3xl">
        {/* Row 1: Title (75%) and language buttons (25%) */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <div className="col-span-3">
            <h1 className="text-lg font-bold py-2">
              {ui.pageTitle} {stopId}
            </h1>
          </div>
          <div className="flex items-center justify-end gap-2">
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
        
        {/* Row 2: Club Pilates image (75%) and back button (25%) */}
        <div className="grid grid-cols-6 gap-2 mb-2">
          <div className="col-span-5">
            <a href="https://www.clubpilates.com/location/westboro" target="_blank" rel="noopener noreferrer">
              <img 
                src="/club-pilates.jpeg" 
                alt="Club Pilates" 
                className="w-full h-auto object-cover rounded-sm"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to={`/${lang}`}
              className="mr-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left" aria-labelledby="backArrowTitle">
                <title id="backArrowTitle">Back</title>
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl flex flex-col items-center my-2">
        {/* Using key prop to force remounting when language changes */}
        <audio key={audioKey} controls className="w-full">
          <source src={audioSrc} type="audio/mp3" />
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
