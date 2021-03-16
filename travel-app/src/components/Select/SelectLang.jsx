import React, { useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function SelectLang() {
  const classes = useStyles();
  const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'en');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false)
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    // localStorage.removeItem('lang')
    if (localStorage.getItem('lang') === lang) return
    console.log("ZAMENA")
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ru'}>Русский</MenuItem>
          <MenuItem value={'fr'}>France</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
