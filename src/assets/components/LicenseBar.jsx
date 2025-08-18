const LicenseBar = () => {
  return (
    <>
      <div className="license-area">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://nana-kwao.github.io/nana"
              target="_blank"
              rel="noopener noreferrer"
              className="attribution"
            >
              f.nanakwao.
            </a>
            All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default LicenseBar;
