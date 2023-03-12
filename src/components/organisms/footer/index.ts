'use-strict';
const footer = (): string => {
  const footerWrapper = `
    <div>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <img src='./logo.png' alt='tastier logo'/>
    </div>
  `;
  return footerWrapper;
};

export default footer;
