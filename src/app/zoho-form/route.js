export async function GET() {
  const html = `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: transparent; color: #374151; font-family: "Plus Jakarta Sans", "Inter", sans-serif;'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
	<form id='webform3209734000060050024' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3209734000060050024' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory3209734000060050024()' accept-charset='UTF-8'>
		<input type='hidden' name='xnQsjsdp' value='8249e7b9292ea4cb6d6e1db5ca2e0929391063c186a1fa1c7e9614fa768f3e8d'>
		<input type='hidden' name='zc_gad' id='zc_gad' value=''>
		<input type='hidden' name='xmIwtLD' value='017a975b10c1e6a1b8364fddfe51b8833d414be62a005b373a474f37e54282d3a52405bbfdd395a60c2f6335bb3d3d63'>
		<input type='hidden' name='actionType' value='TGVhZHM='>
		<input type='hidden' name='returnURL' value='null'>
		<input type='hidden' id='ldeskuid' name='ldeskuid'>
		<input type='hidden' id='LDTuvid' name='LDTuvid'>
        
		<style>
			:root {
				--text: #374151;
				--input-bg: #f9fafb;
				--input-border: #d1d5db;
				color-scheme: light;
			}
			@media (prefers-color-scheme: dark) {
				:root {
					--text: #f8fafc;
					--input-bg: #1e293b;
					--input-border: #334155;
				}
			}
			html, body {
				margin: 0px;
				padding: 0px;
				background-color: transparent;
				font-family: inherit;
				width: 100%;
				overflow-x: hidden;
			}
			*, *::before, *::after {
				box-sizing: border-box !important;
			}
			.formsubmit.zcwf_button {
				color: white !important;
				background-color: #1D4ED8 !important;
				border-radius: 8px !important;
				padding: 12px 24px !important;
				font-weight: 600 !important;
				border: none !important;
				transition: transform 0.2s ease, box-shadow 0.2s ease !important;
				box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3) !important;
                width: 280px;
                font-size: 1.05rem;
                letter-spacing: 0.5px;
                cursor: pointer;
			}
			.formsubmit.zcwf_button:hover {
				transform: translateY(-2px) !important;
				box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4) !important;
			}
			#crmWebToEntityForm.zcwf_lblLeft {
				width: 100%;
				padding: 0;
				margin: 0 auto;
			}
			.zcwf_lblLeft .zcwf_col_fld input[type=text],
			.zcwf_lblLeft .zcwf_col_fld input[type=password],
			.zcwf_lblLeft .zcwf_col_fld input[type=email],
			.zcwf_lblLeft .zcwf_col_fld textarea {
				width: 100%;
				border: 1.5px solid var(--input-border) !important;
				border-radius: 8px;
				padding: 12px 16px;
				background-color: var(--input-bg) !important;
				color: var(--text) !important;
				font-family: inherit;
			}
			.zcwf_row { margin-bottom: 20px; }
			.zcwf_col_lab { margin-bottom: 8px; font-weight: 600; font-size: 0.9rem; }
			.wfrm_fld_dpNn { display: none; }
		</style>

		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='First_Name'>First Name <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40'></div>
		</div>
		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='Last_Name'>Last Name <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></div>
		</div>
		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='Email'>Email <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></div>
		</div>
		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='Mobile'>Mobile <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxlength='30'></div>
		</div>
		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='Company'>Company <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200'></div>
		</div>

		<div class='zcwf_row'>
			<div class='zcwf_col_lab'><label for='LEADCF130'>What are your main pain points?</label></div>
			<div class='zcwf_col_fld'><textarea id='LEADCF130' name='LEADCF130' rows='4'></textarea></div>
		</div>

		<div class='zcwf_row'>
			<div class='zcwf_col_lab' id='reCaptchaField'><label>Enter the Captcha <span style='color:red;'>*</span></label></div>
			<div class='zcwf_col_fld'>
				<input type='text' id='captchaField3209734000060050024' name='enterdigest' maxlength='10'/>
				<img id='imgid3209734000060050024' src='https://crm.zoho.com/crm/CaptchaServlet?formId=017a975b10c1e6a1b8364fddfe51b8833d414be62a005b373a474f37e54282d3a52405bbfdd395a60c2f6335bb3d3d63&grpid=8249e7b9292ea4cb6d6e1db5ca2e0929391063c186a1fa1c7e9614fa768f3e8d' style='margin-top: 10px; display: block;'>
				<a href='javascript:;' onclick='reloadImg3209734000060050024();' style='font-size: 0.8rem;'>Reload</a>
			</div>
		</div>

		<div class='zcwf_row wfrm_fld_dpNn'>
			<input type='text' id='LEADCF48' name='LEADCF48' value='FI Digital MEA'>
			<input type='text' id='Lead_Status' name='Lead Status' value='New Lead'>
		</div>

		<div class='zcwf_row' style="margin-top: 20px; text-align: center;">
			<input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Request Free Audit'>
		</div>

		<script>
			function reloadImg3209734000060050024(){
				var captcha = document.getElementById('imgid3209734000060050024');
				captcha.src = captcha.src.indexOf('&d') !== -1 ? captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime() : captcha.src + '&d' + new Date().getTime();
			}
			function checkMandatory3209734000060050024() {
				var mndFileds = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'enterdigest'];
				for (var i = 0; i < mndFileds.length; i++) {
					var fieldObj = document.forms['WebToLeads3209734000060050024'][mndFileds[i]];
					if (fieldObj && !fieldObj.value.trim()) {
						alert(mndFileds[i] + ' cannot be empty.');
						fieldObj.focus();
						return false;
					}
				}
				return true;
			}
		</script>
	</form>
</div>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
