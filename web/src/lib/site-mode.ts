/**
 * Phân biệt bản demo với bản chạy thật.
 *
 * Mặc định là DEMO — phải chủ động đặt NEXT_PUBLIC_SITE_MODE=production mới thành bản thật.
 * Chọn mặc định an toàn: quên cấu hình thì tệ nhất là hiện thừa dải cảnh báo và không được
 * Google index, chứ không phải lỡ để một bản đầy ảnh stock nằm công khai như website thật.
 */
export const isProduction = process.env.NEXT_PUBLIC_SITE_MODE === 'production';
export const isDemo = !isProduction;
