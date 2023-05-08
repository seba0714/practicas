import { useState } from 'react' //hay que importar siempre el useState para utilizarlo
//exportamos TwitterFollowCArd para poder utilizarla en App
export function TwitterFollowCard({ children, userName, inicialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)//este estado empieza en falso el useState de isFollowing

  const text = isFollowing ? 'Siguiendo' : 'Seguir' //si is following is true cambia el valor a Siguiendo, sino a Seguir
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' // en esta ternaria le agrega una clase mas al button si esta siguiendo sino solo una

  const handleClick = () => {
    setIsFollowing(!isFollowing);//cambia el estado de isFollowing de True a False y viceversa
  }
  return (
    <article className='tw-followCard'>
      <header className="tw-followCard-header">
        <img
          alt="el avatar de midudev"
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}>
        </img>
        <div className="tw-followCard-info">
          {name}
          <span className="tw-followCard-span">@{(userName)}</span>
        </div>
        <aside className="tw-followCard-aside">
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </header>
    </article>
  )
}