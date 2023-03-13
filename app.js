const form = document.querySelector('form');
const resultDiv = document.getElementById('result');
const urlInput = document.getElementById('url');
const sourceInput = document.getElementById('source');
const outputDiv = document.getElementById("output");
const subject = document.getElementById("subject");
const linkContainer = document.getElementById('link-container');

urlInput.addEventListener('input', (event) => {
  const url = event.target.value.trim();

  switch (url) {
    case 'https://go.worldpaybusinessfinance.com/start':
    case 'https://allrevenue.worldpaybusinessfinance.com/':
      sourceInput.value = 'WPUK';
      break;
    case 'https://get.worldpayworkingcapital.com/account-lookup':
      sourceInput.value = 'WPUS';
      break;
    case 'https://elavon.liberis.com/start':
      sourceInput.value = 'ELVN';
      break;
    case 'https://businessfunding.liberis.com/start':
      sourceInput.value = 'GPUK';
      break;
    case 'https://dev-nets-sweden.liberis.com/start':
      sourceInput.value = 'NETS';
      break;
    case 'https://tide.liberis.co.uk/':
      sourceInput.value = 'TIDE';
      break;
    case 'https://clover.liberis.co.uk/start':
      sourceInput.value = 'CLVR';
      break;
    case 'https://elavon-ie.liberis.com/start':
      sourceInput.value = 'ELIE';
      break;
    case 'https://apply.liberis.com/revenuefinance':
      sourceInput.value = 'GPUK';
      break;
    case 'https://barclaycard.liberis.com/start':
      sourceInput.value = 'BCRD';
      break;   
    case 'https://www.saltpay.co/':
      sourceInput.value = 'SLTP';
      break;  
    default:
      sourceInput.value = '';
      break;
  }
});
   

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = urlInput.value.trim();
  const source = sourceInput.value.trim();
  const medium = document.getElementById('medium').value.trim();
  const campaignYear = document.getElementById('campaign-year').value.trim();
  const campaignMonth = document.getElementById('campaign-month').value.trim();
  const campaignSegment = document.getElementById('campaign-segment').value.trim();
  const campaignChaser = document.getElementById('campaign-chaser').value.trim();
  const campaignTouchpoint = document.getElementById('campaign-touchpoint').value.trim();
  const campaignTesting = document.getElementById('campaign-testing').value.trim();
  const term = document.getElementById('term').value.trim();
  const content = document.getElementById('content').value.trim();
  const campaign = `${campaignYear}_${campaignMonth}_${campaignSegment}_${campaignChaser}_${campaignTouchpoint}_${campaignTesting}`;
  const utmUrl = new URL(url);
  utmUrl.searchParams.set('utm_source', source);
  utmUrl.searchParams.set('utm_medium', medium);
  utmUrl.searchParams.set('utm_campaign', campaign);
  utmUrl.searchParams.set('utm_term', term);
  utmUrl.searchParams.set('utm_content', content);

  if (url === '') {
    alert('Please enter a URL');
    return;
  }

  if (source === '') {
    alert('Please enter a source');
    return;
  }

  let outputValue = '';
  let subjectValue = '';

  if ( medium === 'EM' && campaignSegment === 'LAU') {
    subjectValue = "<strong>Campaign overview</strong> \n You selected the Launch campaign. Launch is x "; 
    outputValue = "";
  } else {
    outputValue = "<strong>Campaign overview</strong> \n ";
    subjectValue = "<strong>Subect line:</strong> Goodness gracious there's no copy here"; 
  }

  if (campaignSegment === 'LAU') {
    const link = document.createElement('a');
    link.href = `https://example.com`;
    link.textContent = 'Click here to access all of the content for this campaign!';
    linkContainer.innerHTML = '';
    linkContainer.appendChild(link);
  } else {
    linkContainer.innerHTML = 'Please enter a name and campaign.';
  }

  


  
  
  resultDiv.textContent = utmUrl.toString();
  subject.textContent = subjectValue; 
  outputDiv.textContent = outputValue;
  outputDiv.innerHTML = outputValue.replace(/\n/g, '<br>');
  subject.textContent = subjectValue;
  subject.innerHTML = subjectValue.replace(/\n/g, '<br>');
});