import images from '~/assets/images';
import videos from '~/assets/videos';

export const Videos = [
    {
        id: 1,
        following: false,
        name: 'Schannelvn',
        nickname: 'schannelvn',
        avatar: images.schannel,
        title: 'Biến hình “cực khác” khi văn phòng Schannel có khách đến =))))',
        src_video: videos.video1,
        music: 'nhạc nền - HA BAO NGOC STORE',
        tags: ['schannel', 'trending'],
        like: 15000,
        comment: 309,
        share: 200,
    },
    {
        id: 2,
        following: true,
        name: 'Chúa tể đồ',
        nickname: 'cobedotdiem',
        avatar: images.cobedotdiem,
        title: 'Tất cũng phải giặt máy nha',
        src_video: videos.video2,
        music: 'NGHE FULL TRÊN YOUTUBE EXCLUSIVE MUSIC - 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐌𝐮𝐬𝐢𝐜',
        tags: [],
        like: 13000,
        comment: 159,
        share: 260,
    },
    {
        id: 3,
        following: true,
        name: 'Nabe',
        nickname: 'nabe_store',
        avatar: images.nabe_store,
        title: 'Son nè',
        src_video: videos.video3,
        music: 'original sound - Kiriara',
        tags: ['lipstick', 'son', 'xh', 'ypfッ'],
        like: 10000,
        comment: 323,
        share: 198,
    },
    {
        id: 4,
        following: false,
        name: 'Như Halo',
        nickname: 'nhu.halo',
        avatar: images.nhuhalo,
        title: 'Đố biết chỗ nào Đà Nẵng !',
        src_video: videos.video4,
        music: 'Bật Tình Yêu Lên - Tăng Duy Tân & Hòa Minzy',
        tags: ['langthangdanang', 'odaucungchup', 'nccdanang', 'nccchuphinh', 'trending'],
        like: 3300,
        comment: 123,
        share: 277,
    },
];
