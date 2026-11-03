import { css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

export const maverickXR50Styles = css`
  @font-face {
    font-family: segment7;
    src: url("/local/7segment.woff") format("woff");
  }
  
  :host {
    display: block;
    height: 100%;
  }

  .maverick-xr50-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 437px;
    height: 100%;
    margin: 0 auto;
    aspect-ratio: 568 / 730;
    container-type: size;
  }

  .maverick-xr50-card {
    position: relative;
    text-align: center;
    width: min(100cqw, 100cqh * 0.7781);
    aspect-ratio: 568 / 730;
    --font-digits: segment7, monospace;
    --font-labels: 'Arial Narrow', sans-serif;
  }
  
  .maverick-xr50-image img {
    display: block;
  }
  
  .maverick-xr50-display {
    box-sizing: border-box;
    position: absolute;
    top: 37.2%;
    left: 50%;
    width: 54%;
    height: 44%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.5);
  }
  
  .lcd-screen {
    width: 100%; 
    height: 100%;
    
    aspect-ratio: 1.1 / 1; 
    
    container-type: inline-size;
  
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
  
  .quadrant {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.3);
    text-shadow: 0.6cqw 0.6cqw 0cqw rgba(0, 0, 0, 0.1);
  }
  
  .quadrant:nth-child(1) {
    border-width: 0 1px 1px 0;
    padding: 0 2cqw 2cqw 0;
  }
  
  .quadrant:nth-child(2) {
    border-width: 0 0 1px 1px;
    padding: 0 0 2cqw 2cqw;
  }
  
  .quadrant:nth-child(3) {
    border-width: 1px 1px 0 0;
    padding: 2cqw 2cqw 0 0;
  }
  
  .quadrant:nth-child(4) {
    border-width: 1px 0 0 1px;
    padding: 2cqw 0 0 2cqw;
  }

  .header-row {
    display: flex;
    justify-content: space-around;
    font-family: var(--font-labels);
    font-weight: bold;
    font-size: 5cqw;
    transform: scaleY(1.2);
  }
  
  .limit-row {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-digits);
    font-size: 10cqw;
    line-height: 0.8;
    margin-top: 2.3cqw;
    transform: scaleY(1.2);
  }
  
  .temp-display {
    display: grid;
    grid-template-columns: 1fr auto; 
    grid-template-rows: 1fr 1fr; 
    flex-grow: 1;
    width: 100%;
    position: relative;
    align-items: stretch;
    transform: scaleY(1.3);
    margin-bottom: 4cqw;
  }
  
  .main-num {
    grid-column: 1;
    grid-row: 1 / span 2;
    font-family: var(--font-digits);
    font-size: 26cqw;
    line-height: 0.8; 
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 1cqw;
    margin-left: -1cqw;
  }
  
  .unit-top {
    grid-column: 2;
    grid-row: 2;
    align-self: start; 
    font-family: var(--font-labels);
    font-weight: bold;
    font-size: 9cqw;
    line-height: 0.7;
    margin-left: 0.5cqw;
    margin-top: -8cqw;
  }

  .unit-decimal {
    grid-column: 2;
    grid-row: 2;
    align-self: end; 
    font-family: var(--font-digits);
    font-size: 17cqw;
    line-height: 0.8;
    display: flex;
    align-items: flex-end;
    margin-bottom: 1cqw;
  }
`;