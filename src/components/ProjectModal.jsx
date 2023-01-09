import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Project from './Project'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function BasicModal({project, projectInfo, img, imgArray}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const carouselItems = imgArray.slice(1).map(element => (
    <div class="carousel-item">
      <img src={element} className="h-50 w-full object-cover"></img>
    </div>
  ))

  return (
    <div className="col-12 col-md-4">
      <div onClick={handleOpen}>
        {project}
      </div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        // disableScrollLock

      >
        <div className="dark:bg-gray-800">

          <DialogTitle id="responsive-dialog-title">

          </DialogTitle>
          <DialogContent >
            <DialogContentText>

              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={imgArray[0]} className="h-50 w-full object-cover"></img>
                  </div>
                  {carouselItems}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <h1 className="text-2xl font-semibold dark:text-gray-300">
                {projectInfo.name}
              </h1>

              <Project projectInfo={projectInfo} />

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
