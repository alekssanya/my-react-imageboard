import './ms.scss'

function ModalSearch(props) {

	return (
		<div className="search-modal" onMouseLeave={(e) => props.ML(e)}>
			<div className="post-menu-modal">
				<a className="post-menu-modal__btn" href={"https://www.google.com/searchbyimage?image_url=" + props.url} target="_blank">Искать в Google</a>
				<a className="post-menu-modal__btn" href={"https://yandex.com/images/search?rpt=imageview&amp;url=" + props.url} target="_blank">Искать в Yandex</a>
				<a className="post-menu-modal__btn" href={"https://saucenao.com/search.php?url=" + props.url} target="_blank">Искать в Saucenao</a>
				<a className="post-menu-modal__btn" href={"https://iqdb.org/?url=" + props.url} target="_blank">Искать в iqdb</a>
			</div>
		</div>
	)
}

export default ModalSearch