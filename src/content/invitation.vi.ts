export type EventKey = 'church' | 'home' | 'party'

export type InvitationEvent = {
  key: EventKey
  title: string
  dateText: string
  timeText: string
  lunarText?: string
  locationName?: string
  addressLines?: string[]
  googleMapsUrl?: string
  mapQueryForEmbed?: string
}

export type RsvpConfig =
  | {
      type: 'disabled'
    }
  | {
      /**
       * Lưu câu trả lời vào Google Sheet qua Apps Script (Web App).
       * Tạo Sheet → Tiện ích mở rộng → Apps Script → dán `google-apps-script/Code.gs` → Triển khai Web App
       * (quyền: Bất kỳ ai). Gán URL `/exec` vào `webAppUrl`.
       */
      type: 'googleSheet'
      webAppUrl: string
    }

export type InvitationContent = {
  locale: 'vi'
  couple: {
    brideName: string
    brideNote?: string
    groomName: string
    groomNote?: string
  }
  families: {
    brideParents: string
    groomParents: string
  }
  events: InvitationEvent[]
  rsvp: RsvpConfig
  story: {
    leftText: string
    rightText: string
  }
  gallery: {
    title: string
    images: { src: string; alt: string }[]
  }
}

export const invitationVi: InvitationContent = {
  locale: 'vi',
  couple: {
    brideName: 'Tống Mỹ Nhung',
    brideNote: 'Teresa',
    groomName: 'Châu Thọ Triết',
    groomNote: 'Giacobe',
  },
  families: {
    brideParents: 'Ông Bà: Tống Đức Cường, Huỳnh Thị Mỹ',
    groomParents: 'Ông Bà: Giuse Châu Thọ Thông, Agata Nguyễn Thị Hằng Nga',
  },
  events: [
    {
      key: 'church',
      title: 'Lễ thành hôn (nhà thờ)',
      dateText: 'Thứ Bảy, 09/05/2026',
      timeText: '09:30',
      lunarText: 'Nhằm 23/03 năm Bính Ngọ',
      locationName: 'Giáo điểm Uyên Hưng',
      addressLines: ['Giáo xứ Bến Sắn', 'Giáo phận Phú Cường'],
      googleMapsUrl: 'https://maps.app.goo.gl/u3vF4a3JkwrVbvzi8',
      mapQueryForEmbed: 'Giáo điểm Uyên Hưng, Giáo xứ Bến Sắn, Giáo phận Phú Cường',
    },
    {
      key: 'home',
      title: 'Lễ tại tư gia',
      dateText: 'Chủ Nhật, 10/05/2026',
      timeText: '09:00',
      lunarText: 'Nhằm 24/03 năm Bính Ngọ',
    },
    {
      key: 'party',
      title: 'Tiệc chung vui',
      dateText: 'Chủ Nhật, 10/05/2026',
      timeText: '11:00',
      locationName: 'Trung tâm văn hóa (cơ sở 2) Tân Uyên',
      addressLines: [
        'Trung tâm văn hóa xã Bạch Đằng Cũ',
        'Phường Tân Uyên, TP. Hồ Chí Minh',
        '(Tân Uyên, Bình Dương cũ)',
      ],
      googleMapsUrl: 'https://maps.app.goo.gl/9wFqH8SPTgcWYjWc7',
      mapQueryForEmbed:
        'Trung tâm văn hóa (cơ sở 2) Tân Uyên, Phường Tân Uyên, TP. Hồ Chí Minh',
    },
  ],
  rsvp: {
    type: 'googleSheet',
    webAppUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  },
  story: {
    leftText: '',
    rightText: '',
  },
  gallery: {
    title: 'Hình cô dâu & chú rể',
    images: [
      // Using a lightweight subset (24) for fast load. Files live in `public/gallery/`.
      { src: '/gallery/01.png', alt: 'Nhung & Triết 01' },
      { src: '/gallery/02.png', alt: 'Nhung & Triết 02' },
      { src: '/gallery/03.png', alt: 'Nhung & Triết 03' },
      { src: '/gallery/04.png', alt: 'Nhung & Triết 04' },
      { src: '/gallery/05.png', alt: 'Nhung & Triết 05' },
      { src: '/gallery/06.png', alt: 'Nhung & Triết 06' },
      { src: '/gallery/07.png', alt: 'Nhung & Triết 07' },
      { src: '/gallery/08.png', alt: 'Nhung & Triết 08' },
      { src: '/gallery/09.png', alt: 'Nhung & Triết 09' },
      { src: '/gallery/10.png', alt: 'Nhung & Triết 10' },
      { src: '/gallery/11.png', alt: 'Nhung & Triết 11' },
      { src: '/gallery/12.png', alt: 'Nhung & Triết 12' },
      { src: '/gallery/13.png', alt: 'Nhung & Triết 13' },
      { src: '/gallery/14.png', alt: 'Nhung & Triết 14' },
      { src: '/gallery/15.png', alt: 'Nhung & Triết 15' },
      { src: '/gallery/16.png', alt: 'Nhung & Triết 16' },
      { src: '/gallery/17.png', alt: 'Nhung & Triết 17' },
      { src: '/gallery/18.png', alt: 'Nhung & Triết 18' },
      { src: '/gallery/19.png', alt: 'Nhung & Triết 19' },
      { src: '/gallery/20.png', alt: 'Nhung & Triết 20' },
      { src: '/gallery/21.png', alt: 'Nhung & Triết 21' },
      { src: '/gallery/22.png', alt: 'Nhung & Triết 22' },
      { src: '/gallery/23.png', alt: 'Nhung & Triết 23' },
      { src: '/gallery/24.png', alt: 'Nhung & Triết 24' },
    ],
  },
}

