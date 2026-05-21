import type { Translations } from "./en";

export const vi: Translations = {
  meta: {
    title: "Githubster — Theo dõi người theo dõi và hủy theo dõi trên GitHub",
    description: "Công cụ miễn phí mã nguồn mở để xem ai không follow lại bạn trên GitHub. Không cần đăng nhập.",
  },
  notFound: {
    title: "Không tìm thấy trang",
    description: "Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.",
    button: "Về trang chủ",
  },
  hero: {
    description: "Xem ai không follow lại bạn, ai bạn chưa follow, và quản lý kết nối GitHub của bạn.",
  },
  search: {
    placeholder: "Nhập tên người dùng GitHub",
    button: "Kiểm tra",
    loading: "Đang tải...",
    tokenToggle: "Thêm token (tùy chọn, tăng giới hạn)",
    tokenHide: "Ẩn token (tùy chọn, tăng giới hạn)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Không follow lại",
    notFollowingBack: "Bạn chưa follow",
    following: "Đang follow",
    followers: "Người theo dõi",
  },
  stats: {
    followers: "Người theo dõi",
    following: "Đang follow",
    unfollowers: "Không follow lại",
    notFollowingBack: "Bạn chưa follow",
  },
  empty: {
    unfollowers: "Tất cả người bạn follow đều follow lại bạn! 🎉",
    notFollowingBack: "Bạn đã follow tất cả người theo dõi! 🤝",
    following: "Chưa follow ai.",
    followers: "Chưa có người theo dõi.",
    initial: "Nhập tên người dùng ở trên",
  },
  grid: {
    searchPlaceholder: "Tìm {count} người dùng...",
  },
  seo: {
    title: "Githubster là gì?",
    description:
      "Githubster là công cụ miễn phí mã nguồn mở giúp bạn hiểu mối quan hệ trên GitHub. Không cần đăng nhập, không thu thập dữ liệu.",
    feature1Title: "Unfollower",
    feature1Desc: "Xem ai bạn follow mà không follow lại bạn.",
    feature2Title: "Người theo dõi",
    feature2Desc: "Khám phá người follow bạn mà bạn chưa follow lại.",
    feature3Title: "Riêng tư & An toàn",
    feature3Desc: "Chạy hoàn toàn trên trình duyệt. Không lưu trữ dữ liệu.",
  },
  footer: {
    openSource: "Mã nguồn mở trên",
    madeWith: "Được tạo với ♥ tại",
  },
};
