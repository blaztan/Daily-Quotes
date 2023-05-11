import { QuoteData } from '../utils/setQuoteData';
import { Theme } from '../utils/setTheme';

class QuoteCard {
  static build = (data: QuoteData, theme: Theme): string => {
    const { quote, author } = data;

    const { bg_color, quote_color, author_color, accent_color, border_color } =
      theme;

    return `
      <svg width="500" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              .card {
                font-family: Helvetica, sans-serif;
                background-color: #${bg_color};
                padding: 18px;
                width: 500px;
                height: 200px;
                border: 2px solid #${border_color};
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              }
              .quote {
                font-size: 1.2rem;
                color: #${quote_color};
                padding: 0 1rem;
              }
              .quote::before,
              .quote::after {
                display: block;
                font-size: 2.4rem;
                color: #${accent_color};
                margin-bottom: -1rem;
              }
              .quote::before {
                content: open-quote;
                text-align: left;
                transform: translateX(-1.2rem);
              }
              .quote::after {
                content: close-quote;
                text-align: right;
                transform: translateX(1.2rem);
              }
              .author {
                font-size: 0.8rem;
                font-style: italic;
                color: #${author_color};
              }
              .author::before {
                display: block;
                content: '';
                width: 1.5rem;
                border-bottom: solid 3px #${accent_color};
                margin-bottom: 1rem;
              }
              .text-concat {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            </style>
            <div class="card">
              <h1 class="quote">
                <span class="text-concat">
                  ${quote}
                </span>
              </h1>
              <p class="author">${author}</p>
            </div>
          </div>
        </foreignObject>
      </svg>
    `;
  };
}

export { QuoteCard };
