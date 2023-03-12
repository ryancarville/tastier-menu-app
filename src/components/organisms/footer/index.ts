'use-strict';
/**
 * @description create  and render the footer element
 * @returns void
 */
const footer = (): void => {
  const footerEl = document.querySelector<HTMLElement>('#footer');
  const footerWrapper = `
    <div>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <img src='./logo.png' alt='tastier logo'/>
    </div>
  `;
  if (!!footerEl) footerEl.innerHTML = footerWrapper;
  return;
};

export default footer;
