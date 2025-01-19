import React, { useId } from 'react'
import { Button, Form, Stack, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsFillPencilFill, BsEraserFill } from 'react-icons/bs'

interface ITablaAccionesProps {
  editar: string
  eliminar: string
  activo: string
  estado: boolean
  handleEditar: (id: string) => void
  handleEliminar: (id: string) => void
  handleActivo: (id: string) => void
}
const ButtonT = ({
  id,
  children,
  title,
  variant,
  onClick,
}: {
  id: string
  children: React.ReactNode
  title: string
  variant?: string
  onClick?: (id: string) => void
}) => (
  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
    {variant ? (
      <Button variant={variant} size={'sm'} onClick={() => onClick}>
        {children}
      </Button>
    ) : (
      <>{children}</>
    )}
  </OverlayTrigger>
)
const TablaAcciones: React.FC<ITablaAccionesProps> = ({
  editar,
  eliminar,
  activo,
  estado,
  handleActivo,
  handleEditar,
  handleEliminar,
}): React.ReactNode => {
  const editId = useId()
  const deleteId = useId()
  const switchId = useId()
  const switchIdT = useId()

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form>
          <ButtonT id={switchIdT} title={activo} onClick={() => handleActivo}>
            <Form.Check type="switch" id={switchId} checked={estado} />
          </ButtonT>
        </Form>
        <ButtonT
          variant="outline-primary"
          id={editId}
          title={editar}
          onClick={handleEditar}
        >
          <BsFillPencilFill />
        </ButtonT>
        <ButtonT
          variant="outline-warning"
          id={deleteId}
          title={eliminar}
          onClick={handleEliminar}
        >
          <BsEraserFill />{' '}
        </ButtonT>
      </Stack>
    </>
  )
}
export default TablaAcciones
