# RESTful API for lineupx

## This API is live :

-[API base URL](https://rocky-wave-81720.herokuapp.com/)

## Steps to run locally

## Step-1:

```
npm install
```

### Step-2:

```
npm start
```

### Please visit localhost:4000

# Routes

## /candidate

### - Methods:
Get: It will show the list of candidates
Post: To post the list of candidate

Modal for post:

```
export const CandidateSchema = new Schema({
    cName : {
        type: String,
        required: 'Enter the Candidate Name'
    },
    cLocation: {
        type: String,
        required: 'Enter the location of candidate'
    },
    jobsApplied: {
        type: Array
    }
});
```
# /candidate/:candidateId

## Get: To find one candidate

## Put: To Update a Candidate

# /job
## Get : To view the list of jobs

### - with query strings ?
```
export const findQuery = (req,res) => {
    Job.find({title: req.query.title},(err, job) => {
        if (err) {
            res.send(err);
        }
        else res.json(job)
    })
}


const routes = (app) => {
    let middleware = function (req, res, next) {
        if (!req.query.title) return next();
      
        findQuery(req,res);
        
    };
 ```
 
## Post: To create a new Job

```
export const JobSchema = new Schema({
    title: {
        type: String,
        required: "Enter the job title",
    },
    location: {
        type: String,
        required: "Enter the location",
    },
    screen: {
        type: String,
        required: "Enter the location",
    },
    offer: {
        type: String,
        required: "Enter the location",
    },
    rejected: {
        type: Number,
    },
    candidates: {
        type: Array,
    },
});
```

# /job/:jobId

## Get :

To return a particular Job

## Put:
To update a particular Job

## Delete:
To delete a particular job

# /interview

## Get : To give the list of interviews

## Post: To schedule a new Interview
```

export const InterviewsSchema = new Schema({
    cId: {
        type: String,
        required: 'Provide the cID'
    },
    cName: {
        type: String,
        required: 'Provide the cName'
    },
    data : {
        type: Date,
        required: 'Provide the Date and Time'
    }

})
```



 
