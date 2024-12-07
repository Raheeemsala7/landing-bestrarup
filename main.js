// document.addEventListener('DOMContentLoaded', () => {
//     // تهيئة GrapesJS
//     const editor = grapesjs.init({
//         container: '#editor',
//         height: '100%',
//         width: 'auto',
//         fromElement: true,
//         storageManager: false,

//         // إعدادات الأجهزة (Responsive)
//         deviceManager: {
//             devices: [
//                 { name: 'Desktop', width: '' }, // الوضع الافتراضي
//                 { name: 'Tablet', width: '768px' },
//                 { name: 'Mobile', width: '350px' },
//             ],
//         },

//         // إعداد Panels
//         panels: {
//             defaults: [
//                 {
//                     id: 'panel-top',
//                     el: '.panel__top',
//                     buttons: [
//                         {
//                             id: 'device-desktop',
//                             className: 'btn-desktop',
//                             label: '<i class="fa fa-desktop"></i>',
//                             command: (editor) => editor.setDevice('Desktop'),
//                             attributes: { title: 'View Desktop' },
//                             active: true, // الوضع الافتراضي
//                         },
//                         {
//                             id: 'device-tablet',
//                             className: 'btn-tablet',
//                             label: '<i class="fa fa-tablet"></i>',
//                             command: (editor) => editor.setDevice('Tablet'),
//                             attributes: { title: 'View Tablet' },
//                         },
//                         {
//                             id: 'device-mobile',
//                             className: 'btn-mobile',
//                             label: '<i class="fa fa-mobile"></i>',
//                             command: (editor) => editor.setDevice('Mobile'),
//                             attributes: { title: 'View Mobile' },
//                         },
//                         {
//                             id: 'preview',
//                             className: 'btn-preview',
//                             label: '<i class="fa fa-eye"></i>',
//                             command: 'preview-mode-toggle',
//                             attributes: { title: 'Toggle Preview Mode' },
//                         },
//                     ],
//                 },
//             ],
//         },

//         // إعداد Trait Manager
//         traitManager: { appendTo: '.panel__right' },

//         // إعداد الأنماط
//         styleManager: {
//             appendTo: '.panel__right',
//             sectors: [

//                 {
//                     name: 'Typography',
//                     open: true,
//                     buildProps: ['font-size', 'text-align','color', 'background-color', 'background-image',],
//                 },
//             ],
//             mediaCondition: 'max-width', // استخدام max-width للأجهزة الأصغر
//             mediaPriority: ['Desktop', 'Tablet', 'Mobile'], // الأولوية
//         },
//         deviceManager: {
//             devices: [
//                 {
//                     name: 'Desktop',
//                     width: '', // الوضع الافتراضي
//                 },
//                 {
//                     name: 'Tablet',
//                     width: '768px', // عرض التابلت
//                     widthMedia: '768px', // media query للتابلت
//                 },
//                 {
//                     name: 'Mobile',
//                     width: '375px', // عرض الموبايل
//                     widthMedia: '375px', // media query للموبايل
//                 },
//             ],
//         },
//     });

//     // أمر Toggle Preview Mode
//     let isPreview = false; // حالة الوضع الحالي
//     editor.Commands.add('preview-mode-toggle', {
//         run(editor) {
//             if (isPreview) {
//                 // الخروج من وضع Preview
//                 document.querySelector('.panel__top').style.display = 'flex';
//                 document.querySelector('.panel__right').style.display = 'block';
//                 document.querySelector('#editor').style.width = 'calc(100% - 300px)';
//                 isPreview = false;
//             } else {
//                 // الدخول إلى وضع Preview
//                 document.querySelector('.panel__top').style.display = 'none';
//                 document.querySelector('.panel__right').style.display = 'none';
//                 document.querySelector('#editor').style.width = '100%';
//                 isPreview = true;
//             }
//         },
//     });

//     // إضافة محتوى افتراضي
//     editor.setComponents(`
//       <header class="rahem" style="padding: 20px; background: #4CAF50; color: white; text-align: center;">
//           <h1>Welcome to Our Website</h1>
//           <p>Build your amazing landing page!</p>
//       </header>
//       <section style="padding: 50px; background: #f5f5f5; text-align: center;">
//           <h2>Grow Your Business</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           <button style="padding: 10px 20px; background: #4CAF50; color: white; border: none; cursor: pointer;">Get Started</button>
//       </section>
//       <footer style="padding: 20px; background: #333; color: white; text-align: center;">
//           <p>&copy; 2024 Your Company. All rights reserved.</p>
//       </footer>
//   `);

//     console.log('GrapesJS Initialized with toggleable preview mode');
// });

document.addEventListener('DOMContentLoaded', () => {
    const editor = grapesjs.init({   
        container: '#editor',
        height: '100%',
        width: 'auto',
        fromElement: true,
        storageManager: false,
        // deviceManager: {
        //     devices: [
        //         { name: 'Desktop', width: '' },
        //         { name: 'Tablet', width: '768px' },
        //         { name: 'Mobile', width: '350px' },
        //     ],
        // },
        panels: {
            defaults: [],
        },
    });

    // تعريف الأوامر لتنسيق النص
    editor.Commands.add('bold-text', {
        run(editor) {
            const selected = editor.getSelected();
            if (selected) {
                const style = selected.getStyle();
                style['font-weight'] = style['font-weight'] === 'bold' ? 'normal' : 'bold';
                selected.setStyle(style);
            }
        },
    });

    editor.Commands.add('italic-text', {
        run(editor) {
            const selected = editor.getSelected();
            if (selected) {
                const style = selected.getStyle();
                style['font-style'] = style['font-style'] === 'italic' ? 'normal' : 'italic';
                selected.setStyle(style);
            }
        },
    });

    editor.Commands.add('underline-text', {
        run(editor) {
            const selected = editor.getSelected();
            if (selected) {
                const style = selected.getStyle();
                style['text-decoration'] = style['text-decoration'] === 'underline' ? 'none' : 'underline';
                selected.setStyle(style);
            }
        },
    });

    // إضافة أمر لاختيار اللون
    editor.Commands.add('change-text-color', {
        run(editor) {
            const selected = editor.getSelected();
            if (selected) {
                // إنشاء Color Picker باستخدام jscolor
                const colorPickerHTML = `
                    <input class="jscolor" value="ab2567" onchange="changeTextColor(event, editor)" />
                `;
                const container = document.createElement('div');
                container.innerHTML = colorPickerHTML;
                document.body.appendChild(container);

                // تفعيل مكتبة jscolor
                new jscolor(container.querySelector('.jscolor'));
            }
        },
    });

    // دالة لتغيير اللون عند اختيار اللون من Color Picker
    window.changeTextColor = (event, editor) => {
        const selected = editor.getSelected();
        if (selected) {
            const color = event.target.value; // الحصول على اللون المحدد
            const style = selected.getStyle();
            style['color'] = color;
            selected.setStyle(style); // تطبيق اللون على النص المحدد
        }
    };

    // عرض الأزرار عند تحديد النصوص
    editor.on('component:selected', (component) => {
        const type = component.get('tagName');
        if (type === 'p' || type === 'h1' || type === 'h2') {
            component.set('toolbar', [
                { attributes: { class: 'fa fa-bold', title: 'Bold' }, command: 'bold-text' },
                { attributes: { class: 'fa fa-italic', title: 'Italic' }, command: 'italic-text' },
                { attributes: { class: 'fa fa-underline', title: 'Underline' }, command: 'underline-text' },
                { attributes: { class: 'fa fa-paint-brush', title: 'Change Text Color' }, command: 'change-text-color' }, // زر تغيير اللون
            ]);
        }
    });

    // إضافة محتوى افتراضي
    editor.setComponents(`
      <header style="padding: 20px; background: #4CAF50; color: white; text-align: center;">
          <h1>Welcome to Our Website</h1>
          <p>Build your amazing landing page!</p>
      </header>
      <section style="padding: 50px; background: #f5f5f5; text-align: center;">
          <h2>Grow Your Business</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button style="padding: 10px 20px; background: #4CAF50; color: white; border: none; cursor: pointer;">Get Started</button>
      </section>
      <footer style="padding: 20px; background: #333; color: white; text-align: center;">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
  `);

    console.log('GrapesJS Initialized with working toolbar commands');
});
