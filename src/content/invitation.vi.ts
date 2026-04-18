import { publicUrl } from '../publicUrl'

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
       * Lưu vào Google Sheet qua Apps Script Web App (`google-apps-script/Code.gs`).
       * Nếu Google chặn hoàn toàn (“Ứng dụng này đã bị chặn”), dùng `type: 'webhook'` + Make.com/n8n
       * (Webhook nhận JSON → module Google Sheets thêm dòng) — OAuth kết nối Sheet trên Make, không qua Apps Script.
       */
      type: 'googleSheet'
      webAppUrl: string
    }
  | {
      /**
       * POST JSON: `{ type: 'wedding_rsvp', submittedAt, data: { fullName, message, attendance } }`.
       * Map sang Sheet đúng 4 cột; Make/n8n bỏ mapping cột cũ (locale, couple, userAgent) nếu có.
       */
      type: 'webhook'
      endpointUrl: string
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
    webAppUrl: 'https://script.google.com/macros/s/AKfycbxh09yYUEnphutfEa4rGBoMVSP7T3OjOGR4bZ7d6xz2Y-HfZRzJ1pOWuECis6WHRRgK/exec',
  },
  story: {
    leftText: '',
    rightText: '',
  },
  gallery: {
    title: 'Hình cô dâu & chú rể',
    images: [
      // Using a lightweight subset (24) for fast load. Files live in `public/gallery/`.
      { src: publicUrl('/gallery/01.png'), alt: 'Nhung & Triết 01' },
      { src: publicUrl('/gallery/02.png'), alt: 'Nhung & Triết 02' },
      { src: publicUrl('/gallery/03.png'), alt: 'Nhung & Triết 03' },
      { src: publicUrl('/gallery/04.png'), alt: 'Nhung & Triết 04' },
      { src: publicUrl('/gallery/05.png'), alt: 'Nhung & Triết 05' },
      { src: publicUrl('/gallery/06.png'), alt: 'Nhung & Triết 06' },
      { src: publicUrl('/gallery/07.png'), alt: 'Nhung & Triết 07' },
      { src: publicUrl('/gallery/08.png'), alt: 'Nhung & Triết 08' },
      { src: publicUrl('/gallery/09.png'), alt: 'Nhung & Triết 09' },
      { src: publicUrl('/gallery/10.png'), alt: 'Nhung & Triết 10' },
      { src: publicUrl('/gallery/11.png'), alt: 'Nhung & Triết 11' },
      { src: publicUrl('/gallery/12.png'), alt: 'Nhung & Triết 12' },
      { src: publicUrl('/gallery/13.png'), alt: 'Nhung & Triết 13' },
      { src: publicUrl('/gallery/14.png'), alt: 'Nhung & Triết 14' },
      { src: publicUrl('/gallery/15.png'), alt: 'Nhung & Triết 15' },
      { src: publicUrl('/gallery/16.png'), alt: 'Nhung & Triết 16' },
      { src: publicUrl('/gallery/17.png'), alt: 'Nhung & Triết 17' },
      { src: publicUrl('/gallery/18.png'), alt: 'Nhung & Triết 18' },
      { src: publicUrl('/gallery/19.png'), alt: 'Nhung & Triết 19' },
      { src: publicUrl('/gallery/20.png'), alt: 'Nhung & Triết 20' },
      { src: publicUrl('/gallery/21.png'), alt: 'Nhung & Triết 21' },
      { src: publicUrl('/gallery/22.png'), alt: 'Nhung & Triết 22' },
      { src: publicUrl('/gallery/23.png'), alt: 'Nhung & Triết 23' },
      { src: publicUrl('/gallery/24.png'), alt: 'Nhung & Triết 24' },
    ],
  },
}

