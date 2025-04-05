import { useParams, Link } from 'react-router-dom';

function StopPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold py-2">Ottawa Tulip Festival: Stop {id}</h1>
      <Link 
        to="/"
        className="px-5 py-2 bg-foreground text-background rounded-md border-1 hover:opacity-90 transition-opacity my-1"
      >
        Back to Main Page
      </Link>
      <div className="w-full max-w-3xl flex flex-col items-center my-2">
      <audio controls className="w-full">
          <source src={`/src/assets/stop${id}.wav`} type="audio/wav" />
          <track kind="captions" src={`/src/assets/stop${id}.vtt`} label="English" />
        </audio>
      </div>
      <div className="w-screen max-w-3xl bg-white shadow-sm p-6 overflow-y-auto max-h-[72vh] text-left">
        {id === '1' && (
            <>
            <h2 className="text-xl font-bold mb-4">8000 Years ago</h2>
            <p className="mb-4">
              The Algonquin People have lived in the Ottawa Valley for over 8,000 years, relying on its waterways for sustenance and trade. Their egalitarian, clan-based society was deeply connected to the land, but European arrival brought war, disease, and displacement.
            </p>
            <p className="mb-4">
              Despite the 1763 Royal Proclamation recognizing Indigenous land rights, colonial expansion and the lumber trade eroded Algonquin territories. Unlike many First Nations, they never signed a treaty ceding their land, and their claim remains unresolved.
            </p>
            <p className="mb-6">
              Today, over 40,000 Canadians identify as Algonquin, and efforts toward reconciliation and self-governance continue amid ongoing disputes and historical injustices.
            </p>
            
            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>
            
            <h3 className="text-lg font-semibold mt-4">Red Pride</h3>
            <p className="mb-4">
              When you think tulip, you think Red Pride. The Red Pride triumph tulip holds the iconic tulip silhouette we all know. Associated with love and passion, this tulip makes the perfect flower for blossoming couples.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Vogue</h3>
            <p className="mb-4">
              The Vogue is what's known as a double tulip, unlike traditional six petal tulips a double tulip blossoms into stunning multi layered petal arrangements. Curiously the Vogue is also known to lighten in colour as it ages.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Orange Pride</h3>
            <p className="mb-4">
              Energy, strength, and zest for life, this is what comes to mind when most see the Orange Pride. The Orange Pride carries a strong flower, big leaves, and a sturdy stem. This and its ability to grow up to 50 cm tall makes the Orange Pride a tulip of true strength.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Orange Queen</h3>
            <p className="mb-4">
              This tall beauty known as the Orange Queen is well regarded for its properties as a perennial tulip, meaning it can produce many more flowers over years when given attentive care.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Yellow Pride</h3>
            <p className="mb-4">
              A popular triumph tulip, the Yellow Pride is known around the world for its illuminating colour. Yellow Pride are also strong perennial tulips that create outstanding numbers of flowers for years after the first planting.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Yellow Pomponette</h3>
            <p className="mb-4">
              This large petaled yellow tulip is sure to catch your eye with its impressive double bloom and bright joyful colours. The Yellow Pomponette is a true marvel to the senses in both scent and beauty.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Green Power</h3>
            <p className="mb-4">
              Introducing the first ever all green tulip, it's Green Power! Green Power, like other tulips, has edible petals that can be seen being used in salads, fitting for something so leafy green!
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Super Parrot</h3>
            <p className="mb-4">
              Frilly and adventurous, it's the Super Parrot. A notable feature of Parrot tulips are their frilly leaves resembling the feathers of a parrot. The Super Parrot with its white with green highlights colouring it stands out like the white cockatoo we compare their petals to.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Purple Pride</h3>
            <p className="mb-4">
              This giant tulip known as the Purple Pride is famous for its raw strength as a flower. The Purple Pride is the first ever purple petaled Darwin tulip. Darwin tulips are a type of tulip known for strong stems and large blooms. The perfect size to show off all that colour.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Secret Parrot</h3>
            <p className="mb-4">
              Frills, deep purples, and a gentle figure, it's the Secret Parrot! This tulip stands out among its other frilly cousins by being a parrot-double hybrid, having both the frills of a parrot, and the impressive number of petals found on a double tulip.
            </p>
          </>
        )}
        
        {id === '2' && (
          <>
            <h2 className="text-xl font-bold mb-4">The Beginning of Colonial Canada</h2>
            <p className="mb-4">
              In June 1613, Samuel de Champlain traveled up the Ottawa River, marveling at the Rideau and Chaudière Falls while documenting the region and its Algonquin inhabitants. His journals describe the challenging journey, from treacherous rapids to relentless mosquitoes, as he sought a route to Hudson Bay.
            </p>
            <p className="mb-6">
              Champlain's party, misled by an interpreter, never made it past Allumette Island, though he returned two years later, completing the route to Georgian Bay. His accounts provide valuable insights into First Nations history, disrupted by European arrival. Remembered as the "Father of New France," Champlain sought peaceful coexistence but also took part in conflicts that reshaped Indigenous alliances.
            </p>
            
            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>
            
            <h3 className="text-lg font-semibold mt-4">Canada 150 Tulip</h3>
            <p className="mb-4">
              This tulip holds the prestigious title of being the official tulip for Canada's 150th anniversary. Commonly referred to as the Maple Leaf tulip or the Carnaval de Rio Tulip, it was unveiled on May 9, 2016, in Commissioners Park. Featuring an elegant white bloom adorned with streaks of red flames, it strikingly resembles the iconic maple leaf on the Canadian flag.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">National Velvet</h3>
            <p className="mb-4">
              Like the name infers, the National Velvet is a joy to look at with its velvet like visual texture. Growing up to 40 cm and triumphant in its triumph tulip status, the National Velvet can be seen in flower festivals as both a border to flower beds or as the main attraction to the bed, they're just that good
            </p>
          </>
        )}

        {id === '3' && (
          <>
            <h2 className="text-xl font-bold mb-4">Becoming Ottawa, Pre-Confederation</h2>
            <p className="mb-4">
              In the late 1700s, settlers encroached on Chief Pinesi's hunting grounds from the north and south, competing for resources and disrupting Indigenous ways of life. The construction of the Rideau Canal in the 1820s further altered the landscape, flooding shorelines and damaging fisheries.
            </p>
            <p className="mb-4">
              During the War of 1812, Chief Pinesi and Algonquin warriors fought alongside the British, but their contributions were downplayed, and their land petitions ignored. Meanwhile, Bytown (now Ottawa) was founded in 1826 as a hub for canal construction, but it was the booming timber trade—kickstarted by Philemon Wright in 1806—that truly shaped the region. By the early 1900s, Ottawa's sawmills were among the world's most productive.
            </p>
            <p className="mb-6">
              Ottawa became Canada's capital in 1867, but the lumber industry remained its dominant economic force for decades. Over time, logging shifted toward pulp and paper before fading almost entirely. The environmental toll was immense, and the region's transformation marked the irreversible loss of the Indigenous way of life, despite their land never being ceded to European settlers.
            </p>

            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>

            <h3 className="text-lg font-semibold mt-4">Blushing Lady</h3>
            <p className="mb-4">
              The peach like colouring alone is enough for this beauty to stand out in a crowd, but that's not enough for the Blushing Lady. This tulip also stands out by being one of the tallest single late tulips, being able to grow up to 75 cm tall!
            </p>

            <h3 className="text-lg font-semibold mt-4">Bleu Aimable</h3>
            <p className="mb-4">
              Did you know, there is no natural tulip breed that is blue, this doesn't stop the Bleu Aimable from trying with its dazzling deep purple. Being a single late tulip the Bleu Aimable stands tall with it's large flower and sturdy stem.
            </p>

            <h3 className="text-lg font-semibold mt-4">Queen of Night</h3>
            <p className="mb-4">
              The Queen of the Night tulip bulbs represent an exceptional variety, emanating an aura of mystery and allure. Their velvety, deep purple petals, bordering on black, create a striking presence in gardens or flower beds. With a dramatic color and an elegant form, the Queen of the Night tulip introduces an element of sophistication and drama, making it the focal point wherever it graces.
            </p>
          </>
        )}

        {id === '4' && (
          <>
            <h2 className="text-xl font-bold mb-4">Becoming the Capital, Post Confederation</h2>
            <p className="mb-4">
              Bytown in the 1830s was a violent lumber town, plagued by sectarian conflict and gangs like the "Shiners." Meanwhile, Algonquin land loss continued despite their role in the War of 1812, as British land sales excluded them.
            </p>
            <p className="mb-4">
              The 1849 Stony Monday Riot highlighted Bytown's unrest, but by 1853, Lord Elgin saw enough reconciliation to recommend it as Canada's capital. Renamed Ottawa in 1855, it was officially chosen in 1857 and confirmed with Confederation in 1867.
            </p>
            <p className="mb-6">
              Throughout the late 1800s, Algonquins faced further displacement. Timber companies seized their land, and colonial surveys erased their territorial claims, severing them from their ancestral way of life.
            </p>

            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>

            <h3 className="text-lg font-semibold mt-4">Lady Van Eijk</h3>
            <p className="mb-4">
              This crimson lady seems to love flaunting its colours. The Lady Van Ejik is known for long lasting flowers with a mid to late spring bloom. Standing at an impressive 60 cm this Lady draws in all the attention so she can represent her Van Ejik family.
            </p>

            <h3 className="text-lg font-semibold mt-4">Salmon Van Ejik</h3>
            <p className="mb-4">
              Like the name implies, the Salmon Van Ejik dazzles with its salmon pink colouring. The Van Ejik family of tulips are Darwin hybrids, a cross between single late tulips and emperor tulips, the Van Ejiks are both tall and large making for a hardy filled out tulip.
            </p>

            <h3 className="text-lg font-semibold mt-4">Mystic Van Eijk</h3>
            <p className="mb-4">
              Rounding out an elegant bed of Van Ejiks is the Mystic Van Ejik. This tulip pairs its coral pink perfectly with the Salmon Van Ejiks salmon pink, both complimenting the red of the Lady Van Ejik, all three tulips coming together to create the perfect Van Ejik bed laid out before you.
            </p>
          </>
        )}

        {id === '5' && (
          <>
            <h2 className="text-xl font-bold mb-4">Second World War and the Liberation of the Netherlands</h2>
            <p className="mb-4">
              Canada played a key role in liberating the Netherlands during WWII, particularly in 1944-45. Despite facing discrimination, over 3,000 Indigenous Canadians served with distinction in battles like Dieppe, the Italian Campaign, and D-Day. However, many were denied recognition and benefits upon returning home.
            </p>
            <p className="mb-4">
              After Germany invaded Poland in 1939, Canada joined the war, training troops and supporting Britain. Princess Juliana of the Netherlands sought refuge in Ottawa, where her daughter was born in a temporarily designated Dutch territory. Canada's navy protected supply routes, and its air force trained Commonwealth pilots.
            </p>
            <p className="mb-4">
              Canadian forces played a crucial role in the Battle of the Scheldt, securing access to Antwerp's port. They later pushed into the Netherlands, where they faced harsh conditions and widespread starvation. After the German surrender in May 1945, the Dutch welcomed the Canadians with tulips and gratitude.
            </p>
            <p className="mb-6">
              Operation Manna saw the Royal Canadian Air Force deliver vital food supplies, with messages of thanks painted on rooftops. As a token of appreciation, Princess Juliana gifted tulip bulbs to Canada annually, inspiring the Canadian Tulip Festival. The Man with Two Hats statue, unveiled in 2002, symbolizes the enduring friendship between Canada and the Netherlands.
            </p>

            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>

            <h3 className="text-lg font-semibold mt-4">Doberman</h3>
            <p className="mb-4">
              This remarkable triumph tulip takes the elegant Doberman dog and turns it into the flower before you. The Doberman is identifiable by its colours and angular petals, giving it not only the fur of it's namesake but the sleek looks to it as well.
            </p>

            <h3 className="text-lg font-semibold mt-4">Labrador</h3>
            <p className="mb-4">
              There's no question how this furry tulip got its name, the Labrador is a deep maroon fringed tulip. A fringed tulip is a type of tulip consisting of frilled, almost furry like, petals.
            </p>

            <h3 className="text-lg font-semibold mt-4">Bingo</h3>
            <p className="mb-4">
              The Bingo tulip pierces through beds of tulips with its bright yellows and whites, making sure you notice it. The Bingo only grows up to 40 cm and has typically smaller flowers, even though it may be a smaller tulip than its friends Bingo is a strong, resilient tulip with sturdy stems and the ability to tolerate a little bit of shade.
            </p>

            <h3 className="text-lg font-semibold mt-4">Big Red</h3>
            <p className="mb-4">
              The Big Red Tulip is a stunning variety known for its large, bright crimson petals that create a dramatic display in gardens. Its bold, smooth blooms are often seen as a symbol of love and passion, making it a popular choice for both floral arrangements and landscaping. With its robust stems and striking appearance, this tulip stands out in spring gardens, drawing attention with its vivid, fiery color.
            </p>
          </>
        )}

        {id === '6' && (
          <>
            <h2 className="text-xl font-bold mb-4">The Roots of the Festival at the Festival Tulip Garden</h2>
            <p className="mb-4">
              Malak Karsh, founder of the Canadian Tulip Festival, immigrated to Canada from Armenia (then Turkey) in 1937. A celebrated photographer, he documented Canada's landscapes and cultural heritage, earning numerous accolades, including the Order of Canada in 1996.
            </p>
            <p className="mb-4">
              Karsh's work captured iconic scenes like Ottawa's Parliament Buildings, log drivers on the Gatineau and Ottawa Rivers, and the beauty of the Canadian Arctic. His love for Ottawa was reflected in his signature, always inscribed with the city's name.
            </p>
            <p className="mb-6">
              Inspired by the Dutch tulip gift, Karsh proposed a tulip festival to the Ottawa Board of Trade. His vision became reality in 1953, launching the Canadian Tulip Festival as a celebration of the enduring friendship between Canada and the Netherlands.
            </p>

            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>

            <h3 className="text-lg font-semibold mt-4">Big Chief</h3>
            <p className="mb-4">
              Big Chief tulips typically bloom in the late spring, around April to May, and their tall stems make them perfect for adding height to garden beds or for use in cut flower arrangements. These tulips have a classic, bold appearance and can grow to heights of about 16–18 inches (40–45 cm), giving them a commanding presence in any setting.
            </p>

            <h3 className="text-lg font-semibold mt-4">Eagle Wings</h3>
            <p className="mb-4">
              The Eagle Wings tulip is a striking and unique variety known for its elegant and dramatic appearance. This cultivar is part of the parrot tulip family, distinguished by its intricately fringed, feather-like petals that give it a dynamic, almost exotic look. The blooms are a blend of creamy white and rich, deep purple, with the edges of the petals displaying a wavy, feathery texture, resembling the wings of an eagle.
            </p>

            <h3 className="text-lg font-semibold mt-4">Red Dress</h3>
            <p className="mb-4">
              The Red Dress tulip is a stunning variety known for its vibrant, deep red blooms that resemble the elegance of a well-fitted gown. The flowers have a smooth, cup-shaped appearance with bold, slightly pointed petals that create a refined, sophisticated look. Standing at about 14–18 inches (35–45 cm) tall, this tulip is perfect for adding color and drama to gardens or floral arrangements.
            </p>

            <h3 className="text-lg font-semibold mt-4">Lightning Sun</h3>
            <p className="mb-4">
              The Lightning Sun tulip is a captivating variety known for its striking color contrast and unique petal shape. Its vibrant yellow blooms are accented with fiery red streaks, resembling the dynamic energy of a lightning bolt. This tulip grows to a height of about 12–16 inches (30–40 cm) and stands out in gardens, borders, and floral arrangements. Blooming in mid-spring, the Lightning Sun tulip thrives in full sun and well-drained soil, making it a bold and cheerful addition to any landscape.
            </p>
          </>
        )}

        {id === '7' && (
          <>
            <h2 className="text-xl font-bold mb-4">Remembrance and Legacy</h2>
            <p className="mb-4">
              Many Canadian soldiers who perished in the Netherlands during World War II rest in three key Canadian war cemeteries: Holten, Groesbeek, and Bergen op Zoom. Maintained by the Commonwealth War Graves Commission, these cemeteries receive ongoing tributes from the Dutch people. At Holten, schoolchildren place candles on each Canadian grave on Christmas Eve, while local communities "adopt a grave," caring for the plots and learning about the fallen soldiers.
            </p>
            <p className="mb-4">
              Canadians continue to visit the Netherlands to commemorate its liberation, with major celebrations every five years. While veterans once led these pilgrimages, descendants and other Canadians now carry on the tradition, warmly welcomed by a new generation of grateful Dutch citizens.
            </p>
            <p className="mb-4">
              The Canadian Tulip Festival highlights the Indigenous Legacy Project, an initiative by the Royal Canadian Legion Liberation of the Netherlands' Branch 005 and Aboriginal Veterans Autochtones (AVA). In collaboration with Veterans Affairs Canada, the Commonwealth War Graves Commission, and Faces-to-Graves, 17 Indigenous soldiers have been identified at Holton Canadian War Cemetery.
            </p>
            <p className="mb-6">
              As part of the project, a Canadian delegation brought tobacco pouches crafted by Shabot Obaadjiwan youth and shared them with Dutch schoolchildren, fostering remembrance and connection between generations.
            </p>

            <h2 className="text-xl font-bold mb-4">Tulips in this bed</h2>

            <h3 className="text-lg font-semibold mt-4">Pink Symboise</h3>
            <p className="mb-4">
              The Pink Symbiose Tulip is a stunning variety known for its delicate, soft pink petals that gradually fade to a lighter shade at the edges. Its elegant, cup-shaped blooms sit atop tall, slender stems, creating a graceful and sophisticated presence in any garden or floral arrangement. With its subtle, yet captivating color, the Pink Symbiose Tulip is a symbol of beauty and harmony, perfect for adding a touch of elegance to spring displays.
            </p>

            <h3 className="text-lg font-semibold mt-4">Salmon Symbiose</h3>
            <p className="mb-4">
              The Salmon Symbiose Tulip is a striking variety with vibrant, salmon-pink petals that gradually soften to a warm, peachy hue at the edges. Its elegant, pointed blooms create a graceful, uplifting presence in gardens and floral arrangements. This tulip's rich, soft tones evoke a sense of warmth and beauty, making it a perfect choice for adding a splash of color and sophistication to any spring display.
            </p>

            <h3 className="text-lg font-semibold mt-4">Voicemail</h3>
            <p className="mb-4">
              The Voicemail Tulip is a unique and captivating variety, known for its bold, deep violet petals that gradually transition to a soft lavender hue at the edges. Its striking color combination, paired with a slightly frilled bloom, creates a dramatic yet elegant look in any garden or bouquet. With its distinct and eye-catching appearance, the Voicemail Tulip is a perfect choice for adding a touch of mystery and sophistication to your spring floral displays.
            </p>

            <h3 className="text-lg font-semibold mt-4">Rockabilly</h3>
            <p className="mb-4">
              The Rockabilly Tulip is a playful and vibrant variety that features bold, fiery red petals with striking white edges, giving it a retro, rocker-inspired flair. Its unique color contrast and strong, upright stems make it a standout in any garden or arrangement. With its fun and dynamic appearance, the Rockabilly Tulip brings a lively, energetic vibe to spring blooms, perfect for adding a pop of color and a touch of personality to your floral displays.
            </p>

            <h3 className="text-lg font-semibold mt-4">Marshmallow</h3>
            <p className="mb-4">
              The Marshmallow Tulip is a soft and delicate variety, featuring pure white petals that have a gentle, almost velvety texture. With its simple yet elegant appearance, it exudes a calm, serene beauty that complements any garden or bouquet. Its smooth, rounded blooms add a touch of purity and freshness, making the Marshmallow Tulip a perfect choice for creating a clean, timeless look in spring floral displays.
            </p>

            <h3 className="text-lg font-semibold mt-4">Mariola</h3>
            <p className="mb-4">
              The Mariola Tulip is a charming and striking variety, featuring soft, creamy white petals with a vibrant splash of deep purple at the edges. This bold color contrast creates a captivating and elegant look, making it a standout in any garden or floral arrangement. With its graceful shape and vivid hues, the Mariola Tulip adds a touch of sophistication and flair to spring displays, perfect for those seeking a balance of beauty and drama.
            </p>

            <h3 className="text-lg font-semibold mt-4">Gold Rush</h3>
            <p className="mb-4">
              The Gold Rush Tulip is a dazzling variety, featuring vibrant golden-yellow petals with a subtle touch of orange at the edges. Its bold, bright blooms capture the essence of spring sunshine, creating a lively and cheerful atmosphere in any garden or bouquet. With its striking color and elegant shape, the Gold Rush Tulip is a perfect choice for adding warmth and energy to your floral displays.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default StopPage;