let currentFilter = 'all'; 

  let jobsData = [
    { id: 1, 
      company: 'Mobile First Corp', 
      role: 'React Native Developer', 
      meta: 'Remote • Full-time • $130,000 - $175,000', 
      desc: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', 
      status: 'not-applied' 
    },

    { id: 2, 
      company: 'WebFlow Agency', 
      role: 'Web Designer & Developer', 
      meta: 'Los Angeles, CA • Part-time • $80,000 - $120,000', 
      desc: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
      status: 'not-applied' 
    },

    { id: 3, 
      company: 'DataViz Solutions', 
      role: 'Data Visualization Specialist', 
      meta: 'Boston, MA • Full-time • $125,000 - $165,000', 
      desc: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', 
      status: 'not-applied' 
    },

    { id: 4, 
      company: 'CloudFirst Inc', 
      role: 'Backend Developer', 
      meta: 'Seattle, WA • Full-time • $140,000 - $190,000', 
      desc: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', 
      status: 'not-applied' 
    },

    { id: 5, 
      company: 'Innovation Labs', 
      role: 'UI/UX Engineer', 
      meta: 'Austin, TX • Full-time • $110,000 - $150,000', 
      desc: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', 
      status: 'not-applied' 
    },

    { id: 6, 
      company: 'MegaCorp Solutions', 
      role: 'JavaScript Developer', 
      meta: 'New York, NY • Full-time • $130,000 - $170,000', 
      desc: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', 
      status: 'not-applied' 
    },

    { id: 7, 
      company: 'StartupXYZ', 
      role: 'Full Stack Engineer', 
      meta: 'Remote • Full-time • $120,000 - $160,000', 
      desc: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', 
      status: 'not-applied' 
    },

    { id: 8, 
      company: 'TechCorp Industries', 
      role: 'Senior Frontend Developer', 
      meta: 'San Francisco, CA • Full-time • $130,000 - $175,000', 
      desc: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', 
      status: 'not-applied' 
    }
  ];

  
  const jobListEl = document.getElementById('job-list');
  const emptyStateEl = document.getElementById('empty-state');
  const statTotalEl = document.getElementById('stat-total');
  const statInterviewEl = document.getElementById('stat-interview');
  const statRejectedEl = document.getElementById('stat-rejected');
  const jobCountTextEl = document.getElementById('job-count-text');
  
  
  const filterBtns = document.querySelectorAll('.filter-btn');

  
  function renderUI() {
    
    
    const interviewJobsArray = jobsData.filter((job) => {
      return job.status === 'interview';
    });

    const interviewJobsCount = interviewJobsArray.length;

    const rejectedJobsArray = jobsData.filter((job) => {
      return job.status === 'rejected';
    });

    const rejectedJobsCount = rejectedJobsArray.length;

    const totalJobsCount = jobsData.length;

    
    statTotalEl.textContent = totalJobsCount;
    statInterviewEl.textContent = interviewJobsCount;
    statRejectedEl.textContent = rejectedJobsCount;

    
    const filteredJobsArray = jobsData.filter((job) => {
      if (currentFilter === 'all') {
        return true; 
      } 
      else {
        return job.status === currentFilter; 
      }
    });

    
    let jobTextString = "";
    if (filteredJobsArray.length === 1) {
      jobTextString = "1 job";
    } 
    else {
      jobTextString = filteredJobsArray.length + " jobs";
    }
    jobCountTextEl.textContent = jobTextString;

    
    if (filteredJobsArray.length === 0) {
      
      jobListEl.classList.add('d-none');
      emptyStateEl.classList.add('d-flex');
    } 
    else {
      
      jobListEl.classList.remove('d-none');
      emptyStateEl.classList.remove('d-flex');
      
     
      const htmlArray = filteredJobsArray.map((job) => {
        
        let badgeClass = 'badge-not-applied';
        let badgeText = 'Not Applied';
        
        if (job.status === 'interview') {
          badgeClass = 'badge-interview';
          badgeText = 'Interview';
        } 
        else if (job.status === 'rejected') {
          badgeClass = 'badge-rejected';
          badgeText = 'Rejected';
        }

        const cardHTML = `
          <div class="job-card" data-id="${job.id}">
            <div class="job-header">
              <div class="job-title-group">
                <h3 class="job-title">${job.company}</h3>
                <span class="job-role">${job.role}</span>
              </div>
             
              <button class="btn-delete" aria-label="Delete Job">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>

            <div class="job-meta">${job.meta}</div>

            <div class="job-content">
              <span class="badge ${badgeClass}">${badgeText}</span>
              <p class="job-desc">${job.desc}</p>
            </div>

            <div class="job-actions">
              <button class="action-btn interview">Interview</button>
              <button class="action-btn reject">Rejected</button>
            </div>
          </div>
        `;
        
        return cardHTML;
      });

      
      const finalHTMLString = htmlArray.join('');
      jobListEl.innerHTML = finalHTMLString;
    }
  }

  
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      
     
      filterBtns.forEach((b) => {
        b.classList.remove('active');
      });
      
     
      const clickedButton = event.target;
      clickedButton.classList.add('active');
      
      
      const selectedFilter = clickedButton.getAttribute('data-filter');
      currentFilter = selectedFilter;
      
      renderUI();
    });
  });

  
  jobListEl.addEventListener('click', (event) => {
    const clickedElement = event.target;
    
   
    const cardElement = clickedElement.closest('.job-card');
    
    
    if (cardElement === null) {
      return; 
    }
    
    
    const idString = cardElement.getAttribute('data-id');
    const targetJobId = parseInt(idString, 10);
    
    
    const isDeleteButtonClicked = clickedElement.closest('.btn-delete');
    const isInterviewButtonClicked = clickedElement.closest('.action-btn.interview');
    const isRejectButtonClicked = clickedElement.closest('.action-btn.reject');

    
    if (isDeleteButtonClicked !== null) {
      const remainingJobs = jobsData.filter((job) => {
        return job.id !== targetJobId;
      });
      jobsData = remainingJobs;
      
      renderUI();
    }

    
    else if (isInterviewButtonClicked !== null) {
      const foundJob = jobsData.find((job) => {
        return job.id === targetJobId;
      });
      
      if (foundJob !== undefined) {
        foundJob.status = 'interview';
        renderUI(); 
      }
    }

    
    else if (isRejectButtonClicked !== null) {
      const foundJob = jobsData.find((job) => {
        return job.id === targetJobId;
      });
      
      if (foundJob !== undefined) {
        foundJob.status = 'rejected';
        renderUI(); 
      }
    }
  });

   renderUI();
