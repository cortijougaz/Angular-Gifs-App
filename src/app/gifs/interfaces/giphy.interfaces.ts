export interface imagesItem {
	fixed_height: fixed_heightItem;
	fixed_width_downsampled: fixed_width_downsampledItem;
	original: originalItem;
	fixed_height_small: fixed_height_smallItem;
	fixed_width_small: fixed_width_smallItem;
	fixed_width: fixed_widthItem;
	fixed_height_downsampled: fixed_height_downsampledItem;
}

export interface originalItem {
	mp4: string;
	size: string;
	frames: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	hash: string;
	height: string;
}

export interface Pagination {
	offset: number;
	total_count: number;
	count: number;
}

export interface fixed_height_smallItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface GiphyItem {
	import_datetime: string;
	images: imagesItem;
	embed_url: string;
	trending_datetime: string;
	bitly_url: string;
	rating: string;
	is_sticker: number;
	source: string;
	type: string;
	bitly_gif_url: string;
	title: string;
	source_tld: string;
	url: string;
	analytics_response_payload: string;
	analytics: analyticsItem;
	alt_text: string;
	source_post_url: string;
	content_url: string;
	is_low_contrast: boolean;
	id: string;
	slug: string;
	username: string;
}

export interface onclickItem {
	url: string;
}

export interface fixed_widthItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface fixed_height_downsampledItem {
	size: string;
	width: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface onloadItem {
	url: string;
}

export interface analyticsItem {
	onclick: onclickItem;
	onsent: onsentItem;
	onload: onloadItem;
}

export interface fixed_heightItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface fixed_width_downsampledItem {
	size: string;
	width: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface fixed_width_smallItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface Meta {
	msg: string;
	response_id: string;
	status: number;
}

export interface onsentItem {
	url: string;
}

export interface GiphyResponse {
	pagination: Pagination;
	data: GiphyItem[];
	meta: Meta;
}

