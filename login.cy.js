/// <reference types="cypress"/>

describe('Login Feature',() => {
    it('User Login dengan username dan password benar',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
      it('User Login dengan Username and Password yang salah', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang salah
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        // Mengisi password yang salah
        cy.get('[name="password"]').type('admin113');  // Password yang salah
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login dengan Password yang salah', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang benar
        cy.get('[name="username"]').type('Admin');  // Username yang benar
        // Mengisi password yang salah
        cy.get('[name="password"]').type('admin113');  // Password yang salah
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login dengan Username yang salah', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang salah
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        // Mengisi password yang benar
        cy.get('[name="password"]').type('admin123');  // Password yang benar
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login tanpa memasukkan username and password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password kosong
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');  // Memastikan pesan error tampil
      })
      it('User Login dengan username benar dan password kosong', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang benar
        cy.get('[name="username"]').type('Admin');  // Username yang benar
        // Mengisi password kosong
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username kosong dan password benar', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password benar
        cy.get('[name="password"]').type('admin123');  // password yang benar
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username salah dan password kosong', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang salah
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        // Mengisi password kosong
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username kosong dan password salah', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password salah
        cy.get('[name="password"]').type('admin113');  // password yang salah
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      describe('Forgot Your Password Feature', () => {
        beforeEach(() => {
          // Mengunjungi halaman login sebelum setiap test
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        });
        it('User berhasil reset password dengan username benar', () => {
          // Memastikan tombol 'Forgot your password?' terlihat
          cy.contains('Forgot your password?').should('be.visible');
          // Klik tombol 'Forgot your password?'
          cy.contains('Forgot your password?').click();
          // Memastikan halaman pemulihan password terbuka dengan URL yang benar
          cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
          // Memastikan form reset password terlihat
          cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
          cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
          cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
          cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
          cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
        });
        it('User berhasil reset password dengan username berbeda', () => {
            // Memastikan tombol 'Forgot your password?' terlihat
            cy.contains('Forgot your password?').should('be.visible');
            // Klik tombol 'Forgot your password?'
            cy.contains('Forgot your password?').click();
            // Memastikan halaman pemulihan password terbuka dengan URL yang benar
            cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
            // Memastikan form reset password terlihat
            cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
            cy.get('input[name="username"]').type('AdminB');  // Memastikan input email terlihat
            cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
            cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
            cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
        });
        it('User membatalkan untuk Reset Password', () => {
            // Memastikan tombol 'Forgot your password?' terlihat
            cy.contains('Forgot your password?').should('be.visible');
            // Klik tombol 'Forgot your password?'
            cy.contains('Forgot your password?').click();
            // Memastikan halaman pemulihan password terbuka dengan URL yang benar
            cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
            // Memastikan form reset password terlihat
            cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
            cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
            cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
            cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click();
            cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
        });
      
      });
})