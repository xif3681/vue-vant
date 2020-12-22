
// get url params
export const getSearchParameter = (str) => {
	// 异常处理
	if (typeof str !== 'string' || !str) {
		return false;
	}

	const query = window.location.search.substring(1);
	const stringArr = query.split('&');

	for (let i = 0; i < stringArr.length; i++) {
		const [ key, value ] = stringArr[i].split('=');
		if (key.trim() === str.trim()) {
			return value.trim();
		}
	}

	return false;
};
let myTimeOut = null;
export const scrollFun = (onBottom) => ({ target }) => {
	var clientHeight = target.clientHeight;
	var scrollTop = target.scrollTop;
	var scrollHeight = target.scrollHeight - 10;
	if (scrollTop + clientHeight >= scrollHeight) {
		if (myTimeOut) {
			clearTimeout(myTimeOut);
		}
		myTimeOut = setTimeout(() => {
			clearTimeout(myTimeOut);
			myTimeOut = null;
			onBottom();
		}, 400);
	}
};
export const OnScrollViewListener = (className, onBottom) => {
	let scrollView = document.querySelector(className);
	scrollView.addEventListener('scroll', scrollFun(onBottom), true);
};

export const removeScrollListener = (className, onBottom) => {
	let scrollView = document.querySelector(className);
	scrollView.removeEventListener('scroll', scrollFun(onBottom), true);
};

// get session
export const getSessionItem = (str) => {
	if (typeof str !== 'string' || !str) return undefined;
	return sessionStorage.getItem(str);
};

// set session
export const setSessionItem = (key, value) => {
	if (typeof key !== 'string' || !key) return false;
	sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
	return true;
};
// 检查状态
export const checkStatus = (status, type) => {
	let str = '';
	switch (status) {
		case 0:
			str = '待区域分配';
			break;
		case 1:
			str = '删除';
			break;
		case 2:
			str = '待发布';
			break;
		case 3:
			str = '已失效';
			break;
		case 4:
			str = '已完成';
			break;
		case 5:
			str = '进行中';
			break;
		case 6:
			str = '待生效';
			break;
	}
	return str;
};

export const BUNISS_CIR = [
	{ title: '低档商圈', id: 1 },
	{ title: '中档商圈', id: 2 },
	{ title: '高档商圈', id: 3 },
	{ title: '尖高档商圈', id: 4 }
];
