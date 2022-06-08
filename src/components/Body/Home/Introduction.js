import { useState } from 'react';
import Effects from '../Effects/Effects';
import Bengali from './Bengali';
import English from './English';

const Introduction = () => {
    const [beng, setBeng] = useState(true);
    return (
        <section style={{ backgroundColor: '#ab8b70' }}>
            <div id="HomeIntroduction" className="container-fluid pb-5 pt-5">
                <Effects
                    id="Home_Offer"
                    title="What we offer"
                />
				<div className="container mt-5 pb-5">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffbb2c" className="bi bi-pen" viewBox="0 0 16 16">
									<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
								</svg>
								<h3>Stories</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#5578ff" className="bi bi-pen-fill" viewBox="0 0 16 16">
									<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
								</svg>
								<h3>Poems</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#e80368" className="bi bi-palette" viewBox="0 0 16 16">
									<path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
								</svg>
								<h3>Paintings</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#e361ff" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
									<path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
									<path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
									<path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
								</svg>
								<h3>Music</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#47aeff" className="bi bi-mic-fill" viewBox="0 0 16 16">
									<path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
									<path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
								</svg>
								<h3>Other Audio content</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffa76e" className="bi bi-camera-video" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
								</svg>
								<h3>Videos</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#11dbcf" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
									<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
								</svg>
								<h3>Travel Blogs</h3>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box">
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4233ff" className="bi bi-image" viewBox="0 0 16 16">
									<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
									<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
								</svg>
								<h3>Photography</h3>
							</div>
						</div>
				</div>
			</div>
                <aside className="language">
                    <button onClick={() => setBeng(!beng)} data-bs-toggle="tooltip" data-bs-placement="top" title="Translate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                            <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                        </svg>
                        </button>
                </aside>
                <article className="container intro-text">
                    {
                        beng ?
                            <Bengali/>
                            :
                            <English/>
                        }
                </article>
            </div>
        </section>
        );
}

export default Introduction;