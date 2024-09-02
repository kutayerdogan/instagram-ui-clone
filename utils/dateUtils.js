import moment from 'moment';

const getTimeAgo = (date) => {
    const now = moment();
    const postDate = moment(date);
    const differenceInMinutes = now.diff(postDate, 'minutes');
    const differenceInHours = now.diff(postDate, 'hours');
    const differenceInDays = now.diff(postDate, 'days');
    const differenceInWeeks = now.diff(postDate, 'weeks');
    const differenceInMonths = now.diff(postDate, 'months');
    const differenceInYears = now.diff(postDate, 'years');
  
    if (differenceInMinutes < 60) {
      return `${differenceInMinutes} minutes ago`;
    } else if (differenceInHours < 24) {
      return `${differenceInHours} hours ago`;
    } else if (differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInWeeks < 52) {
      return `${differenceInWeeks} weeks ago`;
    } else {
      return `${differenceInYears} years ago`;
    }
  };

export { getTimeAgo };