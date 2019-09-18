import { Router } from 'express';
import { gravatarUri } from '../util';

const router = Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: `welcome to gravatar email converter api ${req}` });
});

router.get('/api/v1/:email', (req, res) => {
  const email = req.params.email;
  const uri = gravatarUri(email);
  res.setHeader('content-type', 'text/plain');
  uri !== ''
    ? res.status(200).send(uri)
    : res.status(400).send({
        status: '400',
        message: 'Bad request, invaild email adress',
      });
});

export default router;
