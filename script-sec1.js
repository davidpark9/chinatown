document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Chinatown in New York City stands as a compelling case study that underscores the resilient adaptability of immigrant communities in the face of evolving cultural and economic challenges. This research employs diverse data sources and analytical techniques to shed light on the interplay of cultural diversity, policies, and economic vitality. It seeks to inform urban planning and policy decisions, extending its relevance beyond Chinatown to culturally enriched neighborhoods. Through a multi-faceted analytical approach, the study explores factors like tourism, infrastructure, community engagement, and the economy, aiming to identify key drivers of outcomes within Chinatown and propose design recommendations for meaningful and sustainable change in this complex urban system. In the context of New York City's global appeal, Chinatown in Manhattan stands out as a cultural hub with a dynamic tourism pattern. Over the past five years, visitor statistics have experienced fluctuations, from growth to a plummet during the pandemic and a resurgence afterward. This area's allure remains a constant, owing to its unique cultural offerings, including vibrant markets, authentic dining experiences, and special events like the Lunar New Year celebrations. The blend of cultures creates an immersive experience that sets Chinatown apart from other tourist destinations in the city. Analyzing tourism data provides insights into the aspects of Chinatown's cultural diversity that resonate most with visitors, while also highlighting the pandemic's economic impact on this vibrant community.";
  
    const textElement = document.getElementById("typing-text");
  const sentences = text.split(". ");
  let sentenceIndex = 0;
  let chunkIndex = 0;

  function type() {
    if (sentenceIndex < sentences.length) {
      const sentence = sentences[sentenceIndex];
      if (chunkIndex < sentence.length) {
        const chunk = sentence.slice(chunkIndex, chunkIndex + 8);
        textElement.innerHTML += chunk;
        chunkIndex += 8;
        setTimeout(type, 100); // Adjust the typing speed here (100ms in this example)
      } else {
        textElement.innerHTML += ".<br><br>";
        chunkIndex = 0;
        sentenceIndex++;
        setTimeout(type, 1000); // Delay before moving to the next sentence
      }
    } else {
      return;
    }
  }

  type();
});
