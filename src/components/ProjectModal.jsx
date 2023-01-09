import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Project from './Project'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

export default function BasicModal({project, projectInfo, img}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="col-12 col-md-4 ">
      <div onClick={handleOpen}>{project}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // disableScrollLock
      >
        <Box sx={style} className="dark:bg-gray-800">
          <button onClick={handleClose}> <i className="fa-solid fa-xmark"></i></button>
          <img src={img} className="h-36 w-full object-cover"></img>

           <h1 className="text-2xl font-semibold dark:text-gray-300">
            {projectInfo.name}
           </h1>

          <Project projectInfo={projectInfo} />
        </Box>
      </Modal>
    </div>
  );
}
