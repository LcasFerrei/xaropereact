import React from 'react';
import './StudentCommentsAndPodcasts.css'; // Importando o arquivo de estilos

const StudentCommentsAndPodcasts = () => {
    return (
        <div className="student-comments-and-podcasts">
            <div className="separator">
                <h2><i class='bx bx-podcast'></i> Podcasts</h2>
                <a href="#">Veja mais <i className='bx bx-chevron-right'></i></a>
            </div>

            <div className="podcasts">
                <div className="item">
                    <div className="top">
                        <i className='bx bx-headphone'></i>
                        <div className="info">
                            <a href="#">Batalha de IA!</a>
                            <p>NerdCast</p>
                            <p>05 Abr 2024</p>
                            <p>Ouvido 100 vezes</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="duration">
                            <i className='bx bx-play-circle'></i>
                            <p>01:09:10</p>
                        </div>
                        <h5 className="tag"><span>+1000</span> Ouvintes</h5>
                    </div>
                </div>
                <div className="item">
                    <div className="top">
                        <i className='bx bx-headphone'></i>
                        <div className="info">
                            <a href="#">Windows 11 sem apps Android; Devs Java em alta; Gleam nova linguagem [Compilado #140]
</a>
                            <p>Compilado do Código Fonte TV</p>
                            <p>10 Mar 2024</p>
                            <p>Ouvido 350 vezes</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="duration">
                            <i className='bx bx-play-circle'></i>
                            <p>00:45:50</p>
                        </div>
                        <h5 className="tag"><span>+1000</span> Ouvintes</h5>
                    </div>
                </div>
                <div className="item">
                    <div className="top">
                        <i className='bx bx-headphone'></i>
                        <div className="info">
                            <a href="#">Iniciativa que ensina programação para mulheres está com inscrições abertas</a>
                            <p>Podcast Canaltech</p>
                            <p>15 Mar 2024</p>
                            <p>Ouvido 800 vezes</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="duration">
                            <i className='bx bx-play-circle'></i>
                            <p>00:16:20</p>
                        </div>
                        <h5 className="tag"><span>+1000</span> Ouvintes</h5>
                    </div>
                </div>
                {/* Adicione mais blocos de <div className="item"> conforme necessário */}
            </div>
        </div>
    );
};

export default StudentCommentsAndPodcasts;
